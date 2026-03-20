import CategoryDetails from "@/components/dashboard/forms/category-details";
import React from "react";



export default function AdminNewCategoriesPage() {
    const CLOUDINARY_CLOUD_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;


    return (
        <div className="w-full">
            <CategoryDetails  />
        </div>
    )
}