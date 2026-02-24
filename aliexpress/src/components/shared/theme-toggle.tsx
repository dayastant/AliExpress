import React from "react";
import { DropdownMenu } from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="w-10 h-10 rounded-full">
                    <SunIcon className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 translate-all dark:rotate-90 dark:scale-0"/>
                    <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 translate-all dark:rotate-0 dark:scale-100"/> 
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    );

}