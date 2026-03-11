import React from "react";
import { User } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { Avatar,AvatarImage } from "@/components/ui/avatar";

export default function UserInfo({ user }: { user: User | null }) {
    return (
        <div>
            <div>
                <Button className="w-full mt-5 mb-4 flex items-center justify-between py-10" variant="ghost" >
                    <div className="flex items-center text-left gap-2">
                        <Avatar className="w-16 h-16">
                            <AvatarImage 
                            src={user?.imageUrl} 
                            alt={`${user?.fullName} ${user?.lastName}`} 
                            />
                           
                        </Avatar>
                    </div>
                </Button>
            </div>
        </div>
    )
}