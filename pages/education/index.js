import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import ProjectResume from "../../components/ProjectResume";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducation } from "../../store/education/slice";
import LoadingSpinner from "../../components/Loading";
import Image from "next/image";

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

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'application/pdf':
        return <Image src="/images/pdf.png" width={50} height={50} alt="pdf" />
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return <Image src="/images/doc.png" width={50} height={50} alt="doc" />
      case 'application/vnd.ms-excel':
      case 'text/csv':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return <Image src="/images/xls.png" width={50} height={50} alt="xls" />
      case 'application/vnd.ms-powerpoint':
      case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        return <Image src="/images/ppt.png" width={50} height={50} alt="ppt" />
      default:
        return <Image src="/images/file.png" width={50} height={50} alt="file" />
    }
  };

  const onClickFile = async (item) => {
    const fetchContentFile = await fetch(item.fileUrl);
    if (!fetchContentFile.ok) {
      throw new Error('Network fetchContentFile was not ok');
    }
    const blob = await fetchContentFile.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = item.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  }

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
                      <ul className="list-disc grid laptop:grid-cols-3 tablet:grid-cols-3 mob:grid-cols-1 gap-2">
                        {education.skills.map((skill, index) => (
                          <li key={index} className="ml-5 py-2">
                            {skill?.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-5">
                  <h1 className="text-2xl font-bold mb-5">Degrees</h1>
                  <div className="grid laptop:grid-cols-2 tablet:grid-cols-2 mob:grid-cols-1 gap-4">
                    {education.degrees.map((item, index) => (
                      <div key={index} onClick={() => onClickFile(item)} className="p-4 rounded-lg shadow">
                        <div className="flex flex-row">
                          <div className="w-16">{getFileIcon(item.contentType)}</div>
                          <div className="w-96 ml-2">
                            <h2>{item.name}</h2>
                            <h3 className="text-sm opacity-50 ">{item.description}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
