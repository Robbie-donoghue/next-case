"use server";

export async function getWorkFlows(workflowId) {
  const result = await fetch(
    `https://${process.env.SUBDOMAIN}.swiftcase.co.uk/api/v2/${process.env.API_KEY}/status/${workflowId}.json`
  );
  console.log("This only runs on the server right...", workflowId);
  const workflows = await result.json();
  console.log(workflows);
  return workflows.task_ids;
}

export const getTaskDetails = async (taskId) => {
  const result = await fetch(
    `https://${process.env.SUBDOMAIN}.swiftcase.co.uk/api/v2/${process.env.API_KEY}/task/${taskId}`
  );
  const taskInfo = await result.json();

  return taskInfo;
};
