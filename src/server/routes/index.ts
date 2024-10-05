import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api").use(cors());

/**
 * This is the primary router for your server.
 *
 * All routers added in /server/routers should be manually added here.
 */

// The handler Next.js uses to answer API requests
export const httpHandler = handle(app);

export default app;
