# react-user-list

A small React app (bootstrapped with **create-react-app**) that consumes the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API and displays a list of users. It uses **axios** for the request, the **useEffect** hook to fetch on mount, and the **useState** hook to store the data in a `listOfUser` state.

## What it does

- Fetches users from `https://jsonplaceholder.typicode.com/users` with axios inside a `useEffect` hook.
- Saves the response into the `listOfUser` state via `useState`.
- Maps over `listOfUser` to render each user as a styled card (name, username, email, phone, website, company, city).
- Shows loading and error states.
- Responsive card grid styled with CSS.

## Project structure

```
react-user-list/
├── public/
│   └── index.html
├── src/
│   ├── App.js         # Root component
│   ├── App.css
│   ├── UserList.js    # Fetches (axios + useEffect) and renders the users
│   ├── UserList.css
│   ├── index.js       # Entry point
│   └── index.css
└── package.json
```

## Getting started

```bash
# 1. Install dependencies (includes axios)
npm install

# 2. Start the development server
npm start
```

The app runs at `http://localhost:3000`.

> Axios is already listed in `package.json`. If you set the project up from scratch, install it with `npm install axios`.

## Key hooks

The fetching logic lives in `src/UserList.js`:

```jsx
const [listOfUser, setListOfUser] = useState([]);

useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setListOfUser(response.data))
    .catch((err) => console.error(err));
}, []);
```
