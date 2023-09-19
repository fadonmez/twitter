import React from "react";

const Premium = () => {
  return (
    <div className=" p-4 bg-[#16181c] rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">
          Premium'a Abone Ol
        </h5>
      </a>
      <p className="mb-3 font-semibold text-[15px] text-white dark:text-gray-400">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
        geliri payı kazan.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-bold text-center text-white bg-blue-500 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Abone Ol
      </a>
    </div>
  );
};

export default Premium;
