# 🧠 Moody Journal — Journal with AI Insights

Moody is an AI-powered journaling web app for intelligent mood analysis to better understand yourself and have some fun with it.
It is designed so you can write freely without distractions, reflect deeply and see how you have been doing.

## ✨ Features

### 📝 Journaling

You can start writing your next entry immediately in the journal section.
If you don't know what to write about or just want a new perspective to relfect upon, you can generate a journal prompt to help you get started.

### 🤖 AI Mood Analysis

After submitting an entry, you will get an AI-driven analysis that includes:

- Mood category (e.g., calm, stressed, happy)
- Mood score (range from -5 - 5, where e.g. -3 is sad, 0 neutral and 4 happy.)
- Color-coded emotion indicator (e.g. white for neutral mood)
- Entry summary
- Personalized mood-boosting suggestion (e.g. "Take some time to enjoy a walk in nature" when mood is leaning towards the neutral or negative side)

### 🧠 Mood Image Generation

For each journal entry you can generate a custom image capturing the events you wrote about and mood you were in.

### 📅 History Tracking

You can browse all past journal entries and their mood analyses.Navigate to any entry to revisit your state of mind or what you were doing on that particular day.

### 📅 Tracking

In the tracking section, you can view a 7-day mood trend chart to track your emotional journey.

## 🛠 Tech Stack

| Frontend | Nuxt, Vue 3, TypeScript |
| Backend | Turso DB, Drizzle ORM |
| AI Services | OpenAI API, Replicate API |
| Styling/UI | Tailwind CSS, Chart JS |

## 🚀 Getting Started

1. Clone the Repo
   ´´´bash
   git clone https://github.com/your-username/mood-journal.git
   cd mood-journal
   ´´´

2. Install Dependencies
   ´´´bash
   npm install
   ´´´

3. Set Environment Variables
   Create a .env file and add:

´´´bash
OPENAI_API_KEY=your_openai_key
REPLICATE_API_TOKEN=your_replicate_token
TRUSO_DATABASE_URL=your_turso_db_url
TRUSO_AUTH_TOKEN=your_turso_key
´´´

4. Start Dev Server

´´´bash
npm run dev
´´´

## 📂 Project Structure

´´´bash
components/ // Vue frontend components
pages/ // Nuxt page components
server/ // API routes and backend logic
db/ // Drizzle schema
´´´

📈 FurtherIdeas

- Chat interface
- Moon phase-themed prompts
- Additional habit tracking components

📄 License
MIT — free to use, modify, and share.
