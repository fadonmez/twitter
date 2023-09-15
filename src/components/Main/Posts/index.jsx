import Post from "./Post";
import React from "react";
import { useDataContext } from "@/app/context/data";

const Posts = () => {
  const { posts } = useDataContext();

  // posts dizisini ters sıralayın

  return (
    <div className="w-full">
      {posts.reverse().map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
