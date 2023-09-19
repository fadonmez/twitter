import Post from "./Post";
import React from "react";
import { useDataContext } from "@/app/context/data";

const Posts = () => {
  const { posts } = useDataContext();

  // posts dizisini ters sıralayın
  const reversedPosts = [...posts].reverse();

  return (
    <div className="w-full">
      {reversedPosts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
