"use client";

import React from "react";
import { useChat, Message } from "ai/react";
import RefreshButton from "@/components/refresh";

export default function Chat() {
  const { input, handleInputChange, handleSubmit, messages } = useChat();

  const handleTopicSubmit = (topic: string) => {
    handleInputChange({ target: { value: topic } } as any);
  };

  return (
    <div className="w-full mt-4 p-4 text-black font-bold rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between space-x-5">
          {["Math", "Reading", "Science", "Social Studies"].map((topicName) => (
            <div
              key={topicName}
              className="w-1/4 rounded-lg flex flex-col items-center"
            >
              <button
                type="submit"
                onClick={() => handleTopicSubmit(topicName)}
              >
                <div className="hover:bg-slate-300 rounded-lg p-3">
                  <img src={`/${topicName}.svg`} alt={`${topicName} Symbol`} />
                </div>
                <div className="mt-1 font-bold text-2xl">{topicName}</div>
              </button>
            </div>
          ))}
        </div>
      </form>
      <div className="ml-0 mt-5 mb-5 justify-end flex">
        <RefreshButton />
      </div>
      <div
        className="w-full flex flex-col justify mt-4 bg-slate-300 p-4 text-slate-900 font-mono rounded-lg overflow-y-auto"
        style={{ minHeight: "200px", maxHeight: "400px", maxWidth: "1500px" }}
      >
        {messages.map((message: Message) => (
          <div key={message.id} className="break-words w-full">
            {message.content
              .split("\n")
              .map((currentTextBlock: string, index: number) =>
                currentTextBlock === "" ? (
                  <p key={message.id + index}>&nbsp;</p>
                ) : (
                  <p key={message.id + index} className="whitespace-normal">
                    {currentTextBlock}
                  </p>
                )
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
