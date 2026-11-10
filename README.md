# User Directory

A simple React app for practicing API requests, custom hooks, and live search. Built with Vite and plain CSS.

## Features

- Fetches users and photos from JSONPlaceholder.
- Searches by name, username, or email, ignoring capitalization.
- Displays the number of matching users.
- Shows user cards with photos and contact details.
- Displays loading and error messages for the users request.

## Run locally

Install Node.js and npm, then run:

```sh
npm install
npm run dev
```

Open the local URL printed in your terminal. Internet access is needed to load the API data and remote images. No API key or environment variables are required.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project files

- `src/App.jsx` — Fetches and combines data, filters users, and renders the directory.
- `src/useFetch.js` — Custom `useFetchData(url)` hook returning `{ data, isLoading, err }`.
- `src/index.css` — App layout and user card styles, using nested CSS.
- `index.html` — HTML entry point.

## Data

The app requests `/users` and the first ten `/photos` from [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Photos are paired with users by array position for demonstration; they are not actual user profile pictures.
