import React from "react";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";

const Socials = ({ className }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link cursor-none`}>
      <a
        href={user?.twitterUrl || ''}
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
        href={user?.facebookUrl || ''}
        target="_blank"
        rel="noreferrer"
        className="cursor-none"

      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="pr-5 text-2xl transition-transform transform hover:scale-150 duration-200 ease-in-out"
        />
      </a>
      <a
        href={user?.instagramUrl || ''}
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
        href={`mailto:${user?.email}`}
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
