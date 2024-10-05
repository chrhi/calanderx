import { Context, Hono } from "hono";
import { setCookie } from "hono/cookie";

const auth = new Hono();

export const setSecureCookie = (
  c: Context,
  name: string,
  value: string,
  maxAge: number
) => {
  setCookie(c, name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
};

auth.post("/sign-in", async (c) => {});

auth.post("/sign-up", async (c) => {});

auth.get("/logout", async (c) => {
  //   const userId = await getUserId(c);
  //   const sessionId = getCookie(c, "auth_session");
  //   if (!userId) {
  //     return c.json({ success: false });
  //   }
  //   // how can i logout the user
  //   await deleteSessionForUser(userId);
  //   const sessionCookie = lucia.createBlankSessionCookie();
  //   setCookie(c, sessionCookie.name, sessionCookie.value, {
  //     ...sessionCookie.attributes,
  //     path: "/",
  //     maxAge: 60 * 60 * 24 * 30,
  //   });
  //   return c.json({ success: true });
});
