import * as z from "zod";

export const userValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(30),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(30),
  bio: z
    .string()
    .max(1000, { message: "Bio must be at most 1000 characters long" }),
});
