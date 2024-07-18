import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { stagger } from "../../animations";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import LoadingSpinner from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../../store/activities/slice";

const Activities = () => {
  const text = useRef();
  const router = useRouter();
  const { activityList, loadingList } = useSelector(state => state.activities)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!activityList) {
      dispatch(fetchActivities());
    }
  }, [dispatch, activityList])

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <>
      {loadingList ? <LoadingSpinner /> : <div className="container mx-auto mb-10">
        <div className="mt-10 laptop:p-3">
          <h1
            ref={text}
            className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
          >
            Activities.
          </h1>
          {activityList && activityList.length === 0 && <div className="h-40 flex justify-center items-center w-full">
            No activity found
          </div>}
          <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
            {activityList &&
              activityList.map((post) => (
                <div
                  className="cursor-pointer relative animate-fadeInRight"
                  key={post.id}
                  onClick={() => router.push(`/activities/${post.id}`)}
                >
                  <img
                    className="w-full h-60 rounded-lg shadow-lg object-cover"
                    src={post.image}
                    alt={post.title}
                  ></img>
                  <h2 className="mt-5 text-4xl">{post.title}</h2>
                  <p className="mt-2 opacity-50 text-lg">{post.description}</p>
                  <span className="text-sm mt-5 opacity-25">
                    {ISOToDate(post.publishedDate)}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>}
    </>
  );
};
export default Activities;
