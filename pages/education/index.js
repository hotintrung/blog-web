import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import ProjectResume from "../../components/ProjectResume";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducation } from "../../store/education/slice";
import LoadingSpinner from "../../components/Loading";

const Education = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const { loadingEducation, education } = useSelector(state => state.education)
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!education) {
      dispatch(fetchEducation())
    }
  }, [dispatch, education])

  return (
    <div
      className="container mx-auto mb-10"
    >
      {loadingEducation ? <LoadingSpinner /> :
        <>
          {education && <div className="mt-10 w-full flex flex-col items-center animate-fadeInRight">
            <div
              className={`w-full ${theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
                } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{user && `${user?.firstName} ${user?.lastName}`}</h1>
              <h2 className="text-xl mt-5">👋  {education.bio}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {education.description}
              </h2>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {education.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                {education?.educations.map((edu, index) => (
                  <div key={index} className="mt-2">
                  <h2 className="text-lg">{edu?.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {edu?.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {edu?.universityPara}
                  </p>
                </div>
                ))}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {education.skills && (
                    <div className="mt-2 mob:mt-5">
                      <ul className="list-disc">
                        {education.skills.map((skill, index) => (
                          <li key={index} className="ml-5 py-2">
                            {skill?.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {education.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Frameworks</h2>
                      <ul className="list-disc">
                        {education.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {education.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
                      <ul className="list-disc">
                        {education.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>}
        </>
      }
    </div>
  );
};

export default Education;
