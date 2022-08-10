import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  // TODO: Check for user cookie here
  // If no cookie, redirect to login ese redirect to learn
  return redirect("/login");
};

export default function Index() {
  return <div>Hello world</div>;
}
