"use client";
import { getWorkFlows } from "../utils";

import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { getTaskDetails } from "../utils";
import { useForm } from "react-hook-form";

const WorkflowIdForm = ({ setSum, setDates, setOpen }) => {
  const [formSearchData, setFormSearchData] = useState("");
  const [workflows, setWorkFlows] = useState([]);
  const [taskInfoList, setTaskInfoList] = useState([]);
  const [workflowId, setWorkflowId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const workflowsArray = await getWorkFlows(workflowId);
    setWorkFlows(workflowsArray);

    let taskInfoTemp = [];
    for (const task of workflowsArray) {
      let taskDetails = await getTaskDetails(task.id);

      taskInfoTemp.push(taskDetails);
    }

    const filteredTaskInfoList = taskInfoTemp.filter((task) => {
      const cancelledField = task.data.find(
        (item) => item.name === "cancelled"
      );
      return cancelledField && cancelledField.value === "No";
    });

    setTaskInfoList(filteredTaskInfoList);

    const temp = filteredTaskInfoList.reduce((accumulative, current) => {
      console.log(current);
      return accumulative + parseFloat(current.data[0].value);
    }, 0);
    setSum(temp);

    const dateFormatter = new Intl.DateTimeFormat("en-GB");

    let formattedDates = [];
    let tempDates;
    tempDates = taskInfoTemp.map((task) => {
      const currentDate = new Date(task.data[1].value);
      const formattedDate = dateFormatter.format(currentDate);
      formattedDates.push(formattedDate);

      return currentDate;
    });
    setDates(formattedDates);

    const formatter = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    });
    const formatted = formatter.format(temp); //£668.00

    setSum(formatted);
    setFormSearchData(formData);
    setOpen(true);
  };
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
              onChange={(e) => {
                console.log(e);
                setWorkflowId(e.target.value);
              }}
            />

            {errors.workflowId && (
              <div className="text-red-500">{errors.workflowId.message}</div>
            )}
          </div>
          <div className="flex justify-end">
            <SubmitButton setOpen={setOpen} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkflowIdForm;
