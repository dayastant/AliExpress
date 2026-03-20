import CategoryDetails from "@/components/dashboard/forms/category-details";
import DataTable from "@/components/ui/data-table";
import { getAlllCategories } from "@/queries/category";
import { Plus } from "lucide-react";
import React from "react";

export default async function AdminCategoriesPage() {

    const categories = await getAlllCategories();

    if (!categories) return null;

    const CLOUDINARY_CLOUD_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!CLOUDINARY_CLOUD_KEY) return null;

    return (
        <DataTable actionButtonText={
            <>
                <Plus size={15} />
                Create category
            </>
        }
            modalChildren={<CategoryDetails cloudinary_key= {CLOUDINARY_CLOUD_KEY} />}
            filterValue="name"
            data={categories}
            searchPlaceholder="Search category name..."
            columns={}
        />
    );
}