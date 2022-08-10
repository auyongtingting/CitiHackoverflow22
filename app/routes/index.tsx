import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { setAccessToken } from "~/utils";

export const loader: LoaderFunction = async ({ request }) => {
  const res = await setAccessToken(request);
  return redirect(res ? "/home" : "/login");
};

export default function Index() {
  return <div>Hello world</div>;
}
