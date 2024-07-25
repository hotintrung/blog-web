import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/Loading";
import { fetchActivityDetail } from "../../store/activities/slice";
import ImageCarousel from "../../components/ImageCarousel";
import Image from "next/image";
import ReactPlayer from "react-player";

const ActivityDetail = () => {
  const router = useRouter();
  const param = router.query;
  const activityId = param?.slug || ''
  const { activityDetail, loadingDetail } = useSelector(state => state.activities)
  const [images, setImagesCarousel] = useState([])

  const dispatch = useDispatch();

  useEffect(() => {
    if (activityId) {
      dispatch(fetchActivityDetail(activityId));
    }
  }, [dispatch, activityId])

  useEffect(() => {
    if (activityDetail) {
      setImagesCarousel(activityDetail.imageHeaders.map(i => i?.url))
    }
  }, [activityDetail])

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
                  <div className="w-full h-96 rounded-lg">
                    {images.length > 1 ? <ImageCarousel images={images} /> :
                      <div className="relative h-96 mob:h-64 laptop:h-96 w-full">
                        <Image
                          src={activityDetail?.imageArticleUrl}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    }
                  </div>
                  <h1
                    className="mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold animate-fadeInRight"
                  >
                    {activityDetail.title}
                  </h1>
                  <h2
                    className="mt-2 text-base max-w-4xl text-darkgray opacity-50 animate-fadeInRight"
                  >
                    {activityDetail.description || ''}
                  </h2>
                  <h2
                    className="mt-2 text-xl max-w-4xl text-darkgray animate-fadeInRight"
                  >
                    {activityDetail.content || ''}
                  </h2>
                  {activityDetail.videoUrl &&
                    <div className="mt-10 w-full flex items-center justify-center">
                      <div className="w-full max-w-3xl h-96 rounded-lg shadow-lg react-player">
                        <ReactPlayer url={activityDetail.videoUrl} width="100%" height="100%" controls />
                      </div>
                    </div>
                  }
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
