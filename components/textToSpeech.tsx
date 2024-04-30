import React from 'react';
import { useState } from 'react';
import { useChat } from 'ai/react';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI();

const speechFile = path.resolve('./speech.mp3');

interface TextToSpeechButtonProps {
  text: string; // Text to be converted to speech
}

const TextToSpeechButton: React.FC<TextToSpeechButtonProps> = ({ text }) => {
  const { messages } = useChat(); // Get the messages from the chat component
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTTS = async () => {
    try {
      const mp3 = await openai.audio.speech.create({
        model: 'tts-1',
        voice: 'alloy',
        input: messages.join(' '), // Convert the messages array to a single string
      });

      const buffer = Buffer.from(await mp3.arrayBuffer());
      await fs.promises.writeFile(speechFile, buffer);

      const audio = new Audio(speechFile);
      audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Failed to fetch TTS:', error);
    }
  };

  return (
    <div>
      <button onClick={handleTTS} disabled={isPlaying}>
        {isPlaying ? 'Playing...' : 'Listen'}
      </button>
    </div>
  );
};

export default TextToSpeechButton;
