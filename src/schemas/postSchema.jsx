import * as Yup from "yup";

export const PostSchema = Yup.object().shape({
  content: Yup.string()

    .max(280, "Too Long!")
    .required("Boş paylaşım yapılamaz !"),
});
