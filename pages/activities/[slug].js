import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/Loading";
import { fetchActivityDetail } from "../../store/activities/slice";

const ActivityDetail = () => {
  const router = useRouter();
  const param = router.query;
  const activityId = param?.slug || ''
  const { activityDetail, loadingDetail } = useSelector(state => state.activities)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivityDetail(activityId));
  }, [dispatch, activityId])

  return (
    <>
      {loadingDetail ? <LoadingSpinner /> :
        <>
          <div
            className="container mx-auto mt-10"
          >
            {activityDetail &&
              <>
                <div className="mt-10 flex flex-col laptop:p-5">
                  <img
                    className="w-full h-96 rounded-lg shadow-lg object-cover"
                    src={activityDetail.image}
                    alt={activityDetail.title}
                  ></img>
                  <h1
                    className="mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold animate-fadeInRight"
                  >
                    {activityDetail.title}
                  </h1>
                  <h2
                    className="mt-2 text-xl max-w-4xl text-darkgray opacity-50 animate-fadeInRight"
                  >
                    {activityDetail.tagline || ''}
                  </h2>
                </div>
              </>
            }
          </div>
        </>
      }
    </>
  );
};

export default ActivityDetail;
