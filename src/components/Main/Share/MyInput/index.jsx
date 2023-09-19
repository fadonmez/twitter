import { useField } from "formik";

export default function MyInput({ type, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <textarea
      type={type}
      {...props}
      {...field}
      id="message"
      rows="4"
      className="block p-2.5 w-full overflow-auto  text-lg text-white bg-transparent outline-none "
      placeholder="Neler Oluyor?"
    ></textarea>
  );
}
