import { useRouter } from "next/router";
import { useEffect } from "react";
import { ISOToDate } from "../../utils";
import LoadingSpinner from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, incrementPage } from "../../store/activities/slice";
import Button from "../../components/Button";

const Activities = () => {
  const router = useRouter();
  const { activityList, loadingList, page, totalItems } = useSelector(state => state.activities)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!activityList.length) {
      dispatch(fetchActivities(page));
    }
  }, [dispatch, activityList, page])

  const loadMoreActivities =  () => {
    dispatch(incrementPage());
    dispatch(fetchActivities(page + 1));
  }

  return (
    <>
      {loadingList ? <LoadingSpinner /> : <div className="container mx-auto mb-10">
        <div className="mt-10 laptop:p-3">
          <h1 className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full animate-fadeInRight">
            Activities.
          </h1>
          {activityList.length === 0 && <div className="h-40 flex justify-center items-center w-full">
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
                    src={post.imageArticleUrl}
                    alt={post.imageArticle}
                  ></img>
                  <h2 className="mt-5 text-4xl">{post.title}</h2>
                  <p className="mt-2 opacity-50 text-lg">{post.description}</p>
                  <span className="text-sm mt-5 opacity-25">
                    {ISOToDate(post.publishedDate)}
                  </span>
                </div>
              ))}
          </div>
          <div className="flex justify-center items-center mt-10">
          <Button onClick={() => loadMoreActivities()}>Load More</Button>
          </div>
        </div>
      </div>}
    </>
  );
};
export default Activities;
