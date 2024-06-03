"use client";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";

const ProductIdForm = () => {
  //set with empty string initally
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Enter Product ID</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="productId"
              className="block font-medium text-gray-600 mb-1"
            >
              Product ID
            </label>
            <input //regex pattern for only numbers, error messages
              {...register("productId", {
                required: "Vaild Product ID is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "ProductID must be a number",
                },
                minLength: {
                  value: 1,
                  message: "ProductID must be a number between 1-4 characters",
                },
                maxLength: {
                  value: 4,
                  message: "ProductID must be a number between 1-4 characters",
                },
              })}
              type="productId"
              id="productId"
              name="productId"
              placeholder="Product ID..."
              className="border-gray-300 border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />

            {errors.productId && (
              <div className="text-red-500">{errors.productId.message}</div>
            )}
          </div>
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductIdForm;
