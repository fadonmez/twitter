import React from "react";
import Image from "next/image";

const Post = ({ post }) => {
  const month = [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Agu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara",
  ];

  const d = new Date();
  let day = d.getDate();
  let name = month[d.getMonth()];
  return (
    <div className="flex items-start w-full  gap-3 px-4 py-2 border-b border-[#2f3336] ">
      <img
        className="w-10 h-10 rounded-full"
        src={
          "https://pbs.twimg.com/profile_images/1636465678180818956/lQ8gtLTW_400x400.jpg"
        }
        alt="Rounded avatar"
      ></img>
      <div className="flex flex-col items-start w-full gap-1 ">
        <div className="flex items-center gap-x-1">
          <h4 className="font-bold text-[15px]">Fatih</h4>
          <p className="text-sm text-gray-500">@fatihdonmezq</p>
          <p className="text-gray-500 text-md">
            {day} {name}
          </p>
        </div>
        <p className="text-[15px] break-words w-[500px] ">{post.content}</p>
        {/* <Image
          src="https://picsum.photos/500/500"
          width={500}
          height={500}
          alt="post image"
        /> */}
        <div className="flex items-center justify-between w-full ">
          <div className="flex items-center gap-x-1 group">
            <svg viewBox="0 0 24 24" width={15} height={15} fill="#464b54">
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
            </svg>
            <p className="text-sm text-gray-500">1</p>
          </div>
          <div className="flex items-center gap-x-2 group">
            <svg viewBox="0 0 24 24" width={15} height={15} fill="#464b54">
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
            </svg>
            <p className="text-sm text-gray-500">1</p>
          </div>
          <div className="flex items-center gap-x-1 group">
            <svg viewBox="0 0 24 24" width={15} height={15} fill="#464b54">
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
            </svg>
            <p className="text-sm text-gray-500">1</p>
          </div>
          <div className="flex items-center gap-x-1 group">
            <svg viewBox="0 0 24 24" width={15} height={15} fill="#464b54">
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
            </svg>
            <p className="text-sm text-gray-500">1</p>
          </div>
          <div className="flex items-center gap-x-1 group">
            <svg viewBox="0 0 24 24" width={15} height={15} fill="#464b54">
              <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
            </svg>
            <p className="text-sm text-gray-500">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
