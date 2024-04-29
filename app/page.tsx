"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import Image from "next/image";

const HomePage: React.FC = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center min-h-screen bg-white">
      <div className="mx-auto bg-gradient-to-r from-yellow-100 to-teal-300 rounded-lg m-10 p-10 text-center">
        <Image
          src="/KinderAdventure_logo_no_font.svg"
          alt="KinderAdventure Logo"
          width={150}
          height={150}
          style={{
            margin: "auto",
          }}
        />
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome to KinderAdventure!
        </h1>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <h3 className="text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
              Please type your name
            </h3>
            <div>
              <div className="m-8">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  autoComplete="name"
                  placeholder="Johnny Appleseed"
                  required
                  className="block w-full rounded-full border-0 py-4 p-4 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                onClick={() =>
                  router.push(`/storypage?name=${encodeURIComponent(name)}`)
                }
                type="submit"
                className="flex w-full justify-center rounded-full bg-indigo-600 py-4 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let's Go!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
