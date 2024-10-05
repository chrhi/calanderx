import { db } from "../db";
import { userTable } from "../db/schema";
import { hash } from "@node-rs/argon2";
import { ResultSet } from "@libsql/client";
import { eq } from "drizzle-orm";

type props = {
  email: string;
  password: string;
  username: string;
  userId: string;
};

export async function createCredantionalUser({
  email,
  password,
  username,
  userId,
}: props): Promise<ResultSet> {
  const passwordHash = await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const user = await db.insert(userTable).values({
    id: userId,
    email,
    password: passwordHash,
    username,
  });

  return user;
}

export async function getUserById({ id }: { id: string }): Promise<
  | {
      email: string;
      password: string | null;
      username: string;
      id: string;
      avatar: string | null;
    }
  | undefined
> {
  const user = await db.query.userTable.findFirst({
    //@ts-ignore
    where: (fields) => eq(fields.id, id),
  });

  return user;
}
export async function getUserByEmail({ email }: { email: string }): Promise<
  | {
      email: string;
      password: string | null;
      username: string;
      id: string;
      avatar: string | null;
    }
  | undefined
> {
  const user = await db.query.userTable.findFirst({
    //@ts-ignore
    where: (fields) => eq(fields.email, email),
  });

  return user;
}
