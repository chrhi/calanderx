import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { sessionTable, userTable } from "./schema";

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);

//@ts-ignore
export const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);
