import { createSessionCookie } from "@/lib/lucia";
import { createCredantionalUser, getUserByEmail } from "../data-access/user";
import { generateIdFromEntropySize } from "lucia";
import { verify } from "@node-rs/argon2";

type CreateUserProps = {
  email: string;
  password: string;
  username: string;
};

export async function CreateUserUseCase({
  email,
  password,
  username,
}: CreateUserProps) {
  try {
    const userId = generateIdFromEntropySize(10);

    await createCredantionalUser({
      email,
      password,
      username,
      userId,
    });

    await createSessionCookie(userId);
  } catch (err) {
    console.error(err);
  }
}

type SignInUserProps = {
  email: string;
  password: string;
};

export async function SignInByCredantionalUseCase({
  email,
  password,
}: SignInUserProps) {
  try {
    const dbUser = await getUserByEmail({ email });

    if (!dbUser) {
      return undefined;
    }

    const validPassword = await verify(
      dbUser?.password as string | Uint8Array<ArrayBufferLike>,
      password,
      {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      }
    );

    if (!validPassword) {
      return undefined;
    }

    await createSessionCookie(dbUser?.id);
  } catch (err) {
    console.error(err);
  }
}
