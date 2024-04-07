"use client"
import { useChat } from "ai/react"

export default function Chat() {

    const { input, handleInputChange, handleSubmit, messages } = useChat();

    console.log(messages);

    return (
        <div>
            {/* <form className="mt-12">
                <p>User Message</p>
                <textarea className="w-full h-24 border-2 border-gray-300 p-2 rounded-lg" placeholder="Select a topic from above to get started!"></textarea>
                <button className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Send</button>
            </form> */}
            <p>This is some placeholder text.</p>
        </div>
    )
}