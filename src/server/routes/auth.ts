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

auth.post("/sign-in", async () => {
  // validate input from the user
  // invoke the uses cases
  // return the data to the client
});

auth.post("/sign-up", async () => {
  // validate input from the user
  // invoke the uses cases
  // return the data to the client
});

auth.get("/logout", async () => {
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
