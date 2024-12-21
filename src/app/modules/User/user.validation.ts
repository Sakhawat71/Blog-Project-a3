import { z } from "zod";

const createUserValidation = z.object({
    id: z.string(
        { required_error: "ID is required" }
    ),

    name: z.string(
        { required_error: "Name is required" }
    ),

    email: z.string(
        { required_error: "Email is required" }
    ).email("Invalid email format"),

    password: z.string(
        { required_error: "Password is required" }
    ),

    role: z.enum(
        ["admin", "user"],
        { required_error: "Role is required" }
    ).default("user"),

    isBlocked: z.boolean(
        { required_error: "isBlocked is required" }
    ).default(false),
});

const updateUserValidation = z.object({
    name: z.string().optional(),
    email: z.string().email("Invalid email format").optional(),
    password: z.string().optional(),
    role: z.enum(["admin", "user"]).optional(),
    isBlocked: z.boolean().optional(),
});

export const userValidation = {
    createUserValidation,
    updateUserValidation
}