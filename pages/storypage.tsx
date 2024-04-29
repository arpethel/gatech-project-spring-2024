"use client";

import React from "react";
import Chat from "@/components/chat";
import { useRouter } from "next/router";
import "./../app/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function StoryPage() {
  const router = useRouter();
  const userName = router.query.name || "Guest";

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
        <div className="fixed left-0 top-0 flex w-full justify-left border-b pb-3 pt-20 bg-opacity-50 backdrop-filter backdrop-blur-lg">
          <div className="fixed left-5 top-1 flex items-center">
            <Image
              src="/KinderAdventure_logo.svg"
              alt="Kinder Adventure Logo"
              width={150}
              height={150}
              className="h-20 mr-2"
            />
          </div>
          <div className="fixed right-5 top-3 flex items-center h-20 mr-2">
            <span className="text-3xl font-bold">Hi, {userName}!</span>
          </div>
        </div>
        <div className="ml-0 mt-5 mb-5 justify-end flex">
          <button className="bg-cyan-700 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded">
            <Link href="/">{"Back to Home"}</Link>
          </button>
        </div>

        <div>
          <p className="text-5xl font-bold mt-10 mb-10">{"Choose a topic!"}</p>
          <div className="top-3">
            <Chat />
          </div>
        </div>
      </div>
    </main>
  );
}
