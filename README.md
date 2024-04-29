# KinderAdventure

KinderAdventure is an educational app designed for children, providing a user-friendly interface where they can input their name and select from various educational topics, including Math, Reading, Science, and Social Studies. The app dynamically generates stories or factual content tailored to the chosen subject, fostering an engaging and immersive learning environment. The goal of KinderAdventure is to offer a personalized, interactive, and narratively engaging educational experience across multiple disciplines.

## Installation

To install KinderAdventure, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/arpethel/gatech-project-spring-2024.git
   ```
1. Navigate to the repository directory:
   ```bash
   cd gatech-project-spring-2024
   ```
1. Install dependencies:
   ```bash
   npm install
   ```

## Obtaining an OpenAI API Key

1. Visit the [OpenAI website](https://www.openai.com/).
1. Click on the `Sign Up` button on the top right corner of the page.
1. Fill out the registration form with your details and click `Sign Up`.
1. After signing up, you'll be redirected to the dashboard. If not, click on your profile on the top right corner and select `Dashboard`.
1. In the dashboard, navigate to the `API Keys` section.
1. Click on the `Create New Key` button.
1. You will be prompted to give your key a name and select its permissions. After filling out this information, click `Create`.
1. Your new API key will be generated and displayed. Make sure to copy it and store it securely. 

**Note:** Treat your API keys as you would your password. Do not share them publicly or expose them in your client-side code.

## Create a local .env file
In the root of the project, create a `.env.local` file and define an environment variable called `OPENAI_API_KEY` and set its value to your Open AI API key.
```Example
OPENAI_API_KEY="idk-wh4t3v3rY0urK3YV4lueIs"
```

## Getting Started

To start the development server, run the following command:
```bash
npm run dev
```

Then, open http://localhost:3000 in your browser to view the app.

## Usage
1. Type a name into the Name field and press `Enter` or `Return` on your keyboard.
1. Select one of the four educational topics: Math, Reading, Science, or Social Studies.
1. Observe the personalized educational content presented in story form.