"use server";
import { baseUrl } from "./api/route";
import { workflowUrl } from "./api/route";
//save api urls into variables

// call api stuff

export async function GETworkflows() {
  // const res = await fetch(workflowUrl);
  // const tasks = await res.json();
  // console.log(tasks);
  // return new Response(JSON.parse(JSON.stringify(tasks)));
}
export async function getWorkFlows() {
  // pass form data here
  const result = await fetch(
    `https://${process.env.SUBDOMAIN}.swiftcase.co.uk/api/v2/${process.env.API_KEY}/status/1043.json`
  );
  console.log("This only runs on the server right...");
  const workflows = await result.json();
  console.log(workflows);
  return workflows.task_ids;
}

// loop through workflows
// and call the below?
// push into array

export const getTaskDetails = async (taskID) => {
  // fetch stuff
  const result = await fetch(
    `https://${process.env.SUBDOMAIN}.swiftcase.co.uk/api/v2/${process.env.API_KEY}/task/${taskID}`
  );
  const taskInfo = await result.json();

  return taskInfo;
};
