import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({ }) => {
  return (
    <div className="flex justify-center flex-col">
      <div className=" flex justify-center laptop:mt-20 mob:mt-10 flex-col items-center">
        {/* <Socials className="mt-2 ml-6" /> */}
        <h1 className="text-sm text-bold mt-2 p-2">
        </h1>
      </div>

    </div>
  );
};

export default Footer;
