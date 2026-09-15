"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Profile {
    name: string;
    email: string;
    avatar: string;
    subscription?: string;
    model?: string;
}

const SAMPLE_PROFILE_DATA: Profile = {
    name: "Paris Achmad Fauzan",
    email: "parisafauzan@gmail.com",
    avatar: "/Foto.png",
    subscription: "PRO",
    model: "Gemini 2.0 Flash",
};

interface ProfileDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: Profile;
    showTopbar?: boolean;
}

export default function ProfileDropdown({
    data = SAMPLE_PROFILE_DATA,
    className,
    ...props
}: ProfileDropdownProps) {
    return (
        <div className={cn("relative w-full", className)} {...props}>
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm transition-all duration-200">
                <div className="text-left flex-1 pr-4">
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
                        {data.name}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 tracking-tight leading-tight mt-1">
                        {data.email}
                    </div>
                </div>
                <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900">
                            <Image
                                src={"/Foto.png"}
                                alt={data.name}
                                width={36}
                                height={36}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
