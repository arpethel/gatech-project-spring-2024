"use client";

import React from "react";
import Chat from "@/components/chat";
import { useRouter } from "next/router";
import Link from "next/link";
import "./../app/globals.css";

export default function Home() {
  // const router = useRouter();
  // const userName = router.query.name || "Guest";

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
        <div className="fixed left-0 top-0 flex w-full justify-left border-b pb-3 pt-20 bg-opacity-50 backdrop-filter backdrop-blur-lg">
          <div className="fixed left-5 top-1 flex items-center">
            <img
              src="/KinderAdventure_logo.svg"
              alt="Kinder Adventure Logo"
              className="h-20 mr-2"
            />
          </div>
          <div className="fixed right-5 top-3 flex items-center h-20 mr-2">
            {/* <span className="text-3xl font-bold">Hi, {userName}!</span> */}
            <span className="text-3xl font-bold">Hi, Ryan!</span>
          </div>
        </div>

        <div>
          <p className="text-5xl font-bold mt-10 mb-10">Choose a topic!</p>
          <div className="top-3">
            <Chat />
          </div>
        </div>
      </div>
    </main>
  );
}
