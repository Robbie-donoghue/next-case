"use client";
import { getWorkFlows } from "../utils";
// import { GET } from "../route/route";
import SubmitButton from "./SubmitButton";
import { useEffect, useState } from "react";
import { getTaskDetails } from "../utils";
import { useForm } from "react-hook-form";

const WorkflowIdForm = () => {
  //set with empty string initally
  const [formSearchData, setFormSearchData] = useState("");
  const [workflows, setWorkFlows] = useState([]);
  const [taskInfoList, setTaskInfoList] = useState([]);
  const [sum, setSum] = useState(0);
  const [dates, setDates] = useState([]);

  //set with empty string initally

  useEffect(() => {
    async function fetchAndSum() {
      const workflowsArray = await getWorkFlows();
      setWorkFlows(workflowsArray);

      let taskInfoTemp = [];
      for (const task of workflowsArray) {
        let taskDetails = await getTaskDetails(task.id); //this is working
        //taskInfoList populated here
        // console.log(taskDetails);
        taskInfoTemp.push(taskDetails);
        console.log(taskInfoTemp);
        // console.log(taskDetails);
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
      // once you have the formatted dates -
      const dateFormatter = new Intl.DateTimeFormat("en-GB");

      let formattedDates = [];
      let tempDates;
      tempDates = taskInfoTemp.map((task) => {
        console.log(task.data[1].value);

        const currentDate = new Date(task.data[1].value);

        const formattedDate = dateFormatter.format(currentDate);

        formattedDates.push(formattedDate);
        return currentDate;
      });

      setDates(formattedDates);
      // const formattedDates = dateFormatter.format(tempDates);
      // console.log(formattedDates);
      // use state variables to display the modal
      // use tailwind // https://tailwindcss.com/docs/display
      // figure out how to toggle classList on react.
      // write a modal component that's hidden (invisiable) by default then when the user submits it becomes visable
      // add a close button.
      // add an even listerner to the document body
      // so when you click somewhere on the page that isn't the modal it closes it.
      const formatter = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      });
      const formatted = formatter.format(temp);
      console.log(formatted); //£668.00
    }

    fetchAndSum();
  }, [formSearchData]);
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
    setFormSearchData(formData);
    console.log(formData);
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
