import Socials from "../components/Socials";
import LoadingSpinner from "../components/Loading";
import { useSelector } from "react-redux";
import moment from "moment/moment";

export default function Home() {
  const { user, loadingUser } = useSelector((state) => state.user);
  return (
    <>
      {loadingUser ? <LoadingSpinner /> :
        <>
          {user && (<div className="container mx-auto mb-10">
            <div className="laptop:mt-20 mt-10">
              <div className="mt-5 flex justify-between items-center laptop:flex-row mob:flex-col">
                <div className="flex items-start flex-col laptop:ml-5 laptop:order-1 mob:w-full mob:order-2">
                  <h1
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 animate-fadeInRight"
                  >
                    Hello 👋
                  </h1>
                  <h1
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 animate-fadeInRight"
                  >
                    I&apos;m {user.firstName} {user.lastName}
                  </h1>
                  <p className="mt-2 opacity-50 text-lg animate-fadeInRight">{user.bio}</p>
                </div>
                <div className="flex items-center justify-center mob:w-full laptop:order-2 mob:order-1 mob:mb-5">
                  <div className="w-80 h-80 ">
                    <div className=" overflow-hidden rounded-xl rotate-3">
                      <img
                        src={user.urlHelloPicture}
                        alt={user.altHelloPicture}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Socials className="mt-2 laptop:mt-5 laptop:ml-5" />

              <div className="mt-10 flex justify-between items-center laptop:flex-row mob:flex-col">
                <div className="flex items-center desktop:justify-start mob:justify-center mob:w-full mob:mb-5">
                  <div className="w-80 h-80 ml-5">
                    <div className=" overflow-hidden rounded-xl rotate-3">
                      <img
                        src={user.urlProfilePicture}
                        alt={user.altProfilePicture}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start flex-col mob:w-full">
                  <h1
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 animate-fadeInRight"
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
                      <div className="opacity-50 text-lg">{moment(user.dateOfBirth).format('DD/MM/YYYY')}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 desktop:p-5 tablet:p-2 mob:p-2">
                      <div className="opacity-50 text-lg">Nationality:</div>
                      <div className="opacity-50 text-lg">{user.nationality}</div>
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
