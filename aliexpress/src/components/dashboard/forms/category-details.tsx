import { Category } from "@prisma/client"
import {FC} from "react"

// form handling utilities
import * as z from "zod";
import { useForm } from "react-hook-form";
import { CategoryFormSchema } from "@/lib/schemas";


interface CategoryDetailsProps {
    data?: Category
}

const CategoryDetails: FC<CategoryDetailsProps> = ({ data })=>{

    const form = useForm<z.infer<typeof CategoryFormSchema>>();
    return (
        <div>

        </div>
    )
}

export default CategoryDetails;