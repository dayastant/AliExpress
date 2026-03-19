import { getAlllCategories } from "@/queries/category";
import React from "react";

export default async function AdminCategoriesPage() {

    const categories = await getAlllCategories();

    if (!categories) return null;
    return (
        <div className="">
            Admin categories page
        </div>
    );
}