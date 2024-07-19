import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data

const Header = ({ userProfile }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open, close }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                Welcome, {userProfile && userProfile.firstName}
              </h1>

              <div className="flex items-center">
                <Button
                  onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                  }
                >
                  <img
                    className="h-6"
                    src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                  ></img>
                </Button>

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open
                      ? theme === "dark"
                        ? "menu-white.svg"
                        : "menu.svg"
                      : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                      }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"
                } shadow-md rounded-md`}
            >

              <div className="grid grid-cols-1">
                <Button onClick={() => { router.push("/"), close() }}>About Me</Button>
                <Button onClick={() => { router.push("/activities"), close() }}>Activities</Button>
                <Button onClick={() => { router.push("/education"), close() }}>Education</Button>
                <Button onClick={() => { router.push("/contact"), close()}}>Contact</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-5 hidden flex-row items-center justify-between ${isScrolled ? 'backdrop-opacity-10 backdrop-invert bg-white/10' : ''} sticky ${theme === "light" && "bg-white"
          } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:ml-5 laptop:p-0"
        >
          Welcome, {userProfile && userProfile.lastName}
        </h1>
        <div className="flex">
          <Button onClick={() => router.push("/")}>About Me</Button>
          <Button onClick={() => router.push("/activities")}>Activities</Button>
          <Button
            onClick={() => router.push("/education")}
            classes="first:ml-1"
          >
            Education
          </Button>

          <Button onClick={() => router.push("/contact")}>
            Contact
          </Button>
          {mounted && theme && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <img
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              ></img>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
