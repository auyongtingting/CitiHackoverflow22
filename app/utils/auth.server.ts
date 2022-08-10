import { redirect } from "@remix-run/node";
import { sessionStorage } from "~/session.server";
import restApiClient from "./restApi";

export interface UserData {
  id: string;
  username: string;
  accessToken: string;
}

// Retrieve full session cookie
export function getUserSession(request: Request) {
  return sessionStorage().getSession(request.headers.get("Cookie"));
}

// set accesstoken in Auth header in RestAPI class
export async function setAccessToken(request: Request) {
  const session = await getUserSession(request);
  const accessToken = session.get("accessToken");
  if (!accessToken || typeof accessToken !== "string") return null;
  restApiClient.setHeader("Authorization", accessToken);
  return true;
}

// get full user details
export const getUser = async (
  request: Request
): Promise<Omit<UserData, "accessToken"> | undefined> => {
  await setAccessToken(request);
  const session = await getUserSession(request);

  if (session.has("username")) {
    return {
      id: session.get("id"),
      username: session.get("username"),
    };
  }
  return undefined;
};

export const logout = async (request: Request) => {
  const session = await sessionStorage().getSession(
    request.headers.get("Cookie")
  );
  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage().destroySession(session),
    },
  });
};

export const createUserSession = async (
  user: UserData,
  redirectTo: string,
  rememberMe?: boolean
) => {
  const session = await sessionStorage().getSession();
  restApiClient.setHeader("Authorization", user.accessToken);
  session.set("id", user.id);
  session.set("username", user.username);
  session.set("accessToken", user.accessToken);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage(rememberMe).commitSession(session),
    },
  });
};
