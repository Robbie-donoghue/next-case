"use client";

import { useForm } from "react-hook-form";
export default function SubmitButton({ setOpen }) {
  const {
    formState: { isSubmitting },
  } = useForm();
  return (
    <button
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Loading" : "Submit"}
    </button>
  );
}
