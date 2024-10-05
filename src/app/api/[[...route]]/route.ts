import { httpHandler } from "@/server/routes";

export const runtime = "edge";

export { httpHandler as GET, httpHandler as POST };
