export let baseUrl = `https://${process.env.SUBDOMAIN}.swiftcase.co.uk/api/v2/${process.env.API_KEY}`;

export let workflowUrl = `${baseUrl}/status/1043.json`;

export async function GET() {
  const res = await fetch(workflowUrl);
  const tasks = await res.json();
  console.log(tasks);
  return new Response(JSON.stringify(tasks));
}
