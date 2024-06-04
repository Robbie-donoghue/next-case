"use server";
//save api urls into variables
let baseUrl = `https://${process.env.SUBDOMAIN}.swiftcase.co.uk/api/v2/${process.env.API_KEY}/`;
// call api stuff
export async function GetProductInfo() {
  //base url checks out okay
  const response = await fetch(baseUrl);
  console.log(baseUrl);
  //return as json obj
  return response.json();
}
