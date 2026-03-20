import CategoryDetails from "@/components/dashboard/forms/category-details";
import DataTable from "@/components/ui/data-table";
import { getAlllCategories } from "@/queries/category";
import { Plus } from "lucide-react";
import React from "react";

export default async function AdminCategoriesPage() {

    const categories = await getAlllCategories();

    if (!categories) return null;

    return (
        <DataTable actionButtonText={
            <>
                <Plus size={15} />
                Create category
            </>
        }
            modalChildren={<CategoryDetails  />}
            filterValue="name"
            data={categories}
            searchPlaceholder="Search category name..."
            columns={[]}
        />
    );
}