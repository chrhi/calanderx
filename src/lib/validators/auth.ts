import { z } from "zod";

export const signinformSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signupformSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  fullname: z.string(),
});
