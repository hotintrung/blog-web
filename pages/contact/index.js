import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import Socials from "../../components/Socials";
import ProjectResume from "../../components/ProjectResume";
import Footer from "../../components/Footer";

const Resume = () => {
    const router = useRouter();
    const theme = useTheme();
    const [mount, setMount] = useState(false);
    const resume = {
        description: "I have delivered world-class user experiences to millions of people. Well-versed with React, Javascript, and most of the Web frameworks.",
        experiences: [
            { "id": "1", "dates": "March 2022 - Present", "type": "Full Time", "position": "Frontend Engineer at X", "bullets": "Bullet One, Bullet Two" },
            { "id": "d495c23b-4f65-479a-9b8a-cfbc1c089725", "dates": "July 2020 - March 2022", "type": "Full Time", "position": "Frontend Engineer at X", "bullets": "Worked on the frontend of a React application, Worked on the frontend of a React application" }
        ],
        education: { "universityName": "University X", "universityDate": "2016-2020", "universityPara": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" },
        languages: ["Javascript", "HTML5", "CSS", "Python", "Go"], "frameworks": ["React", "Typescript", "NodeJs"],
        others: ["Figma", "AdobeXD", "AWS"]
    }

    useEffect(() => {
        setMount(true);
    }, []);
    return (
        <>
            <Cursor />
            <div
                className="container mx-auto mb-10 cursor-none"
            >
                <Header />
                <div className="flex flex-col justify-around laptop:mt-20 mt-10 laptop:p-5">
                    <div className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
                        Let's Get in Touch: Ways to Connect with Me
                    </div>

                    <div className="mt-2 opacity-50 text-lg">
                        Thank you for your interest in getting in touch with
                        me. I welcome your feedback, questions, and
                        suggestions. If you have a specific question or
                        comment, please feel free to email me directly at
                        &nbsp;{""}
                        <a href={`mailto:abc@abc.com`} className="underline text-cyan-700 cursor-none">
                            abc@abc.com
                        </a>
                        . I make an effort to respond to all messages within
                        24 hours, although it may take me longer during busy
                        periods. Alternatively, you can use the contact form
                        on my website to get in touch. Simply fill out the
                        required fields and I'll get back to you as soon as
                        possible. Finally, if you prefer to connect on
                        social media, you can find me on{" "}
                        <a
                            href={"https://instagram.com/"}
                            target="_blank"
                            className="underline text-cyan-700 cursor-none"
                            rel="noreferrer"
                        >
                            https://instagram.com/
                        </a>
                        . I post regular updates and engage with my
                        followers there, so don't hesitate to reach out.
                        Thanks again for your interest, and I look forward
                        to hearing from you!
                    </div>
                </div>

                <Socials className="mt-2 laptop:mt-5 laptop:ml-5" />
                <Footer />
            </div>
        </>
    );
};

export default Resume;
