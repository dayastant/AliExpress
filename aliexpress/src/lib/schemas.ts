


// Category form schema

import * as z from "zod";

export const CategoryFormSchema = z.object({
    name : z.string({
        required_error: "Category name is required",
        invalid_type_error: "Category name must be a string",

    })
    .min(2,{message: "Category name must be at least 2 characters long."})
    .max(50,{message: "Category name must be at most 50 characters long."})
    .regex(/^[a-zA-Z0-9\s]+$/, {
        message: "Category name can only contain letters, numbers, and spaces."
    }),
});



