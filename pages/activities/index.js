import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";
const Blog = ({ posts }) => {
  const text = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <>
      <Cursor />
      <Head>
        <title>Blog</title>
      </Head>
      <div
        className="container mx-auto mb-10 cursor-none"
      >
        <Header isBlog={true}></Header>
        <div className="mt-10 laptop:p-3">
          <h1
            ref={text}
            className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
          >
            Activities.
          </h1>
          <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
            {posts &&
              posts.map((post) => (
                <div
                  className="cursor-pointer relative"
                  key={post.slug}
                  onClick={() => router.push(`/activities/${post.slug}`)}
                >
                  <img
                    className="w-full h-60 rounded-lg shadow-lg object-cover"
                    src={post.image}
                    alt={post.title}
                  ></img>
                  <h2 className="mt-5 text-4xl">{post.title}</h2>
                  <p className="mt-2 opacity-50 text-lg">{post.preview}</p>
                  <span className="text-sm mt-5 opacity-25">
                    {ISOToDate(post.date)}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "title",
    "image",
    "preview",
    "author",
    "date",
  ]);

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default Blog;