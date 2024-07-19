import React  from "react";
import Socials from "../../components/Socials";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/Loading";

const Resume = () => {
    const { user, loadingUser } = useSelector((state) => state.user);
    return (
        <>
            {loadingUser && <LoadingSpinner />}
            <div
                className="container mx-auto mb-10"
            >
                <div className="flex flex-col justify-around laptop:mt-20 mt-10 laptop:p-5">
                    <div className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 animate-fadeInRight">
                        Let&apos;s Get in Touch: Ways to Connect with Me
                    </div>

                    <div className="mt-2 opacity-50 text-lg animate-fadeInRight">
                        Thank you for your interest in getting in touch with
                        me. I welcome your feedback, questions, and
                        suggestions. If you have a specific question or
                        comment, please feel free to email me directly at
                        &nbsp;{""}
                        <a href={`mailto:${user?.email}`} className="underline text-cyan-700 cursor-none">
                            {user?.email}
                        </a>
                        . I make an effort to respond to all messages within
                        24 hours, although it may take me longer during busy
                        periods. Alternatively, you can use the contact form
                        on my website to get in touch. Simply fill out the
                        required fields and I&apos;ll get back to you as soon as
                        possible. Finally, if you prefer to connect on
                        social media, you can find me on{" "}
                        <a
                            href={user?.instagramUrl}
                            target="_blank"
                            className="underline text-cyan-700 cursor-none"
                            rel="noreferrer"
                        >
                            {user?.instagramUrl}
                        </a>
                        . I post regular updates and engage with my
                        followers there, so don&apos;t hesitate to reach out.
                        Thanks again for your interest, and I look forward
                        to hearing from you!
                    </div>
                </div>

                <Socials className="mt-2 laptop:mt-5 laptop:ml-5" />
            </div>
        </>
    );
};

export default Resume;
