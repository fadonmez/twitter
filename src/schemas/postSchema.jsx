import * as Yup from "yup";

export const PostSchema = Yup.object().shape({
  content: Yup.string()
    .min(2, "Too Short!")
    .max(300, "Too Long!")
    .required("Required"),
});
