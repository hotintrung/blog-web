import { useEffect, useRef } from "react";
import Socials from "../components/Socials";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import LoadingSpinner from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../store/user/slice";

export default function Home() {
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, user]);

  useIsomorphicLayoutEffect(() => {
    if (loading) {
      stagger(
        [textOne.current, textTwo.current, textThree.current, textFour.current],
        { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
    }
  }, [loading]);

  return (
    <>
      {loading ? <LoadingSpinner /> :
        <>
          {user && (<div className="container mx-auto mb-10">
            <div className="laptop:mt-20 mt-10">
              <div className="mt-5 flex justify-between items-center laptop:flex-row mob:flex-col">
                <div className="flex items-start flex-col laptop:ml-5 laptop:order-1 mob:w-full mob:order-2">
                  <h1
                    ref={textOne}
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
                  >
                    Hello 👋
                  </h1>
                  <h1
                    ref={textTwo}
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                  >
                    I&apos;m Dev
                  </h1>
                  <p ref={textThree} className="mt-2 opacity-50 text-lg animate-fadeInRight">I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies</p>
                </div>
                <div className="flex items-center justify-center mob:w-full laptop:order-2 mob:order-1 mob:mb-5">
                  <div className="w-80 h-80 ">
                    <div className=" overflow-hidden rounded-xl rotate-3">
                      <img
                        src="homepage.jpg"
                        alt="about"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Socials className="mt-2 laptop:mt-5 laptop:ml-5" />

              <div className="mt-10 flex justify-between items-center laptop:flex-row mob:flex-col">
                <div className="flex items-center desktop:justify-start mob:justify-center mob:w-full mob:mb-5">
                  <div className="w-80 h-80 ">
                    <div className=" overflow-hidden rounded-xl rotate-3">
                      <img
                        src="aboutme.jpg"
                        alt="about"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start flex-col mob:w-full">
                  <h1
                    ref={textThree}
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
                  >
                    About Me
                  </h1>
                  <div className="grid grid-cols-1 divide-y animate-fadeInRight">
                    <div className="grid grid-cols-2 gap-2 desktop:p-5 tablet:p-2 mob:p-2">
                      <div className="opacity-50 text-lg">Name:</div>
                      <div className="opacity-50 text-lg">{user.firstName} {user.lastName}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 desktop:p-5 tablet:p-2 mob:p-2">
                      <div className="opacity-50 text-lg">Email:</div>
                      <div className="opacity-50 text-lg">{user.email}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 desktop:p-5 tablet:p-2 mob:p-2">
                      <div className="opacity-50 text-lg">Phone:</div>
                      <div className="opacity-50 text-lg">{user.phone}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 desktop:p-5 tablet:p-2 mob:p-2">
                      <div className="opacity-50 text-lg">Date of birth:</div>
                      <div className="opacity-50 text-lg">{user.dateOfBirth}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 desktop:p-5 tablet:p-2 mob:p-2">
                      <div className="opacity-50 text-lg">Nationality:</div>
                      <div className="opacity-50 text-lg">Viet Nam</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>)
          }
        </>
      }
    </>
  );
}
