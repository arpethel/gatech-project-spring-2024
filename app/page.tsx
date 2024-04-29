"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import "./../app/globals.css";
import Link from "next/link";

const HomePage: React.FC = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({
      pathname: "/",
      query: { name: name },
    });
  };

  return (
    <div className="bg-white justify-center px-6 py-12 lg:px-8">
      <div className="bg-gradient-to-r from-yellow-100 to-teal-300 rounded-lg m-10 p-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-36 w-auto"
            src="/KinderAdventure_logo_no_font.svg"
            alt="Your Company"
          />
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome to KinderAdventure!
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <h3 className="text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
              Please type your name
            </h3>
            <div>
              <div className="m-8">
                <input
                  id="userName"
                  name="userName"
                  type="userName"
                  autoComplete="userName"
                  placeholder="Johnny Appleseed"
                  required
                  className="block w-full rounded-full border-0 py-4 p-4 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-lg"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-indigo-600 py-4 p-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <Link href="/storypage">
                  <p>Let's Go!</p>
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
