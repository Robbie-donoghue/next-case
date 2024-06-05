"use client";
import { getWorkFlows } from "../actions";
// import { GET } from "../route/route";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { getTaskDetails } from "../actions";
import { useForm } from "react-hook-form";

const WorkflowIdForm = () => {
  const [workflows, setWorkFlows] = useState([]);

  //set with empty string initally
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    //api request from server action
    // rename this getWorkFlows
    // when you're done to delete console.logs
    // search through repo using search tool to delete console.logs
    fetchAndSum();
    console.log(formData);
  };

  async function fetchAndSum() {
    const workflowsArray = await getWorkFlows();
    setWorkFlows(workflowsArray);

    let taskInfoList = [];
    for (const task of workflowsArray) {
      let taskDetails = await getTaskDetails(task.id); //this is working
      //taskInfoList populated here
      // console.log(taskDetails);
      taskInfoList.push(taskDetails);
      // console.log(taskDetails);
      // console.log(taskInfoList);
    }

    // console.log(taskInfoList); // taskInfoList's data doesn't exist outside loop?
    const sum = taskInfoList.reduce(
      (accumulative, current) => (accumulative += current.data[0].value),
      0
    );
    console.log(taskInfoList);
    console.log(sum); //sum returns first id(355)'s cost
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Enter Workflow ID</h1>
        <form
          // supposed to deal with errors, and success
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="workflowId"
              className="block font-medium text-gray-600 mb-1"
            >
              Workflow ID
            </label>
            <input //regex pattern for only numbers, error messages
              {...register("workflowId", {
                required: "Vaild Workflow ID is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Workflow must be a number",
                },
                minLength: {
                  value: 1,
                  message:
                    "Workflow ID must be a number between 1-4 characters",
                },
                maxLength: {
                  value: 4,
                  message:
                    "Workflow ID must be a number between 1-4 characters",
                },
              })}
              type="workflowId"
              id="workflowId"
              name="workflowId"
              placeholder="Workflow ID..."
              className="border-gray-300 border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />

            {errors.workflowId && (
              <div className="text-red-500">{errors.workflowId.message}</div>
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

export default WorkflowIdForm;
