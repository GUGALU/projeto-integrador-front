"use client";

import React from "react";
import Crud from "@/app/components/crud/CRUD";

export default function PaginaCrud() {
    return (
        <div className="flex justify-center items-center min-h-screen p-8">
            <div className="w-full max-w-6xl p-6 shadow-lg rounded-md overflow-auto">
                <Crud />
            </div>
        </div>
    );
}