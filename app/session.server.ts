import { createCookieSessionStorage } from "@remix-run/node";

export const getUserSession = (request: Request) =>
  sessionStorage().getSession(request.headers.get("Cookie"));

export const sessionStorage = (rememberMe?: boolean) =>
  createCookieSessionStorage({
    cookie: {
      name: "CITI-cookie",
      secrets: ["sessionSecret"],
      sameSite: "lax",
      path: "/",
      maxAge: rememberMe ? 60 * 24 * 7 : undefined,
      httpOnly: true,
    },
  });
