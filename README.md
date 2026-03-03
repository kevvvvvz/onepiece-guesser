# 🏴‍☠️ One Piece Guesser

A full stack browser game built with React, TypeScript, and Supabase. Test your One Piece knowledge by guessing characters and locations from the anime

---

## How to Play

1. Choose a game mode - **Characters** or **Locations**
2. An image will appear on screen
3. Type your guess and hit **Submit**
4. Find out if you were right and see your final score at the end

---

## Features

- Randomized question order every game so no two runs are run in the same order
- Two game modes - Characters and Locations
- Correct/incorrect feedback after every guess with the right answer revealed
- Live score and question counter during gameplay
- Final score screen at the end
- Play Again without leaving the page

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React + TypeScript | Frontend UI and game logic |
| Vite | Build tool and dev server |
| Tailwind CSS | Styling |
| Supabase | Database and image storage |

---

## Getting Started

### Prerequisites
- Node.js installed
- A Supabase account and project with `characters` and `locations` tables

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/one-piece-guesser.git

# Navigate into the project
cd one-piece-guesser

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open your browser and go to `http://localhost:5173`

---

## Environment Variables

Create a `.env` file in the root of the project with the following:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these in your Supabase dashboard under **Settings → API**.

### Database Setup

Create two tables in Supabase:

**characters**
| Column | Type |
|---|---|
| id | uuid (auto) |
| name | text |
| image | text |
| crew | text |

**locations**
| Column | Type |
|---|---|
| id | uuid (auto) |
| name | text |
| image | text |
| arc | text |

Upload your images to a **public Supabase Storage bucket** and paste the public URLs into the `image` column of each table.

---

## Future Improvements

- Countdown timer per question
- Leaderboard using Supabase
- Multiple choice mode
- Devil Fruit guessing as a third game mode

---
