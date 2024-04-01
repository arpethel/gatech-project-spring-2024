// import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const chatgpt = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

export default chatgpt;
