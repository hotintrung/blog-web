import React from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "next-themes";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link cursor-none`}>
      <a
        href={"https://github.com"}
        target="_blank"
        rel="noreferrer"
        className="cursor-none"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="pr-5 text-2xl transition-transform transform hover:scale-150 duration-200 ease-in-out"
        />
      </a>
      <a
        href={"https://github.com"}
        target="_blank"
        rel="noreferrer"
        className="cursor-none"

      >
        <FontAwesomeIcon
          icon={faGithub}
          className="pr-5 text-2xl transition-transform transform hover:scale-150 duration-200 ease-in-out"
        />
      </a>
      <a
        href={"https://github.com"}
        target="_blank"
        rel="noreferrer"
        className="cursor-none"

      >
        <FontAwesomeIcon
          icon={faStackOverflow}
          className="pr-5 text-2xl transition-transform transform hover:scale-150 duration-200 ease-in-out"
        />
      </a>
      <a
        href={"https://github.com"}
        target="_blank"
        rel="noreferrer"
        className="cursor-none"

      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="pr-5 text-2xl transition-transform transform hover:scale-150 duration-200 ease-in-out"
        />
      </a>
      <a
        href={`mailto:${"https://github.com"}`}
        target="_blank"
        rel="noreferrer"
        className="cursor-none"

      >
        <FontAwesomeIcon
          icon={faMailBulk}
          className="pr-5 text-2xl transition-transform transform hover:scale-150 duration-200 ease-in-out"
        />
      </a>
    </div>
  );
};

export default Socials;
