"use server";
//save api urls into variables

// call api stuff

export async function getWorkFlows(workflowId) {
  // pass form data here
  const result = await fetch(
    `https://${process.env.SUBDOMAIN}.swiftcase.co.uk/api/v2/${process.env.API_KEY}/status/${workflowId}.json`
  );
  console.log("This only runs on the server right...", workflowId);
  const workflows = await result.json();
  console.log(workflows);
  return workflows.task_ids;
}

// loop through workflows
// and call the below?
// push into array

export const getTaskDetails = async (taskId) => {
  // fetch stuff
  const result = await fetch(
    `https://${process.env.SUBDOMAIN}.swiftcase.co.uk/api/v2/${process.env.API_KEY}/task/${taskId}`
  );
  const taskInfo = await result.json();

  return taskInfo;
};
