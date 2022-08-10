import type { LoaderFunction } from "@remix-run/node";
import { logout } from "~/utils/auth.server";

// eslint-disable-next-line import/prefer-default-export
export const loader: LoaderFunction = async ({ request }) => {
  return logout(request);
};
