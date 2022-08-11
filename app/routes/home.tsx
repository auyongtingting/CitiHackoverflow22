import { json, redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { getUser } from "~/utils";
import { Outlet } from "@remix-run/react";
import { NavBar } from "~/components";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (user && user.id) return json({ user });
  return redirect("/login"); // If no user cookie found
};

const Home = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Home;
