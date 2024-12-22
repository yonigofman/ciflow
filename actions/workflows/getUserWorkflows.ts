"use server";

export async function GetUserWorkflows() {
  await waitFor(3000);
  return <div>Workflows</div>;
}