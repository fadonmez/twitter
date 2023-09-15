import React from "react";
import { Formik, Field, Form } from "formik";
import { useDataContext } from "@/app/context/data";
import { PostSchema } from "@/schemas/postSchema";

const Share = () => {
  const { setPosts, posts } = useDataContext();

  return (
    <div className="flex items-start w-full gap-3 px-4 py-2 border-b border-[#2f3336]  ">
      <img
        className="w-10 h-10 rounded-full"
        src="https://pbs.twimg.com/profile_images/1636465678180818956/lQ8gtLTW_400x400.jpg"
        alt="Rounded avatar"
      ></img>
      <Formik
        initialValues={{
          content: "",
          image: null,
        }}
        validationSchema={PostSchema}
        onSubmit={(values, actions) => {
          const updatedPosts = [...posts];
          const newPost = {
            content: values.content,
          };
          updatedPosts.push(newPost);
          setPosts(updatedPosts);
          actions.resetForm();
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form type="textarea" className="w-full">
            <div className="flex flex-col items-center w-full gap-2">
              <Field
                className="w-full h-auto pt-2 pb-4 text-lg font-semibold text-gray-300 bg-transparent border-none outline-none resize-none "
                type="text"
                placeholder="Neler Oluyor?"
                id="content"
                name="content"
              />

              <div className="flex items-center justify-between w-full ">
                <div className="flex items-center gap-x-3">
                  <svg
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    fill="#1d9bf0"
                  >
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
                  </svg>

                  <svg
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    fill="#1d9bf0"
                  >
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    fill="#1d9bf0"
                  >
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    fill="#1d9bf0"
                  >
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    fill="#1d9bf0"
                  >
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    fill="#1d9bf0"
                  >
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-white transition-opacity bg-blue-500 rounded-full hover:opacity-80"
                >
                  Gönder
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Share;
