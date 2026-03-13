import CategoryDetails from "@/components/dashboard/forms/category-details";
import React from "react";



export default function AdminNewCategoriesPage() {
    const CLOUDINARY_GLOUD_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if(!CLOUDINARY_GLOUD_KEY ) return null;

    return (
        <div className="w-full">
            <CategoryDetails cloudinary_key= {CLOUDINARY_GLOUD_KEY} />
        </div>
    )
}