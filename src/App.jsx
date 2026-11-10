import React from "react";
import { useFetchData } from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const { data: users, isLoading, err } = useFetchData(url);
  const [query, setQuery] = React.useState("");

  const message = () => {
    if (err) return <div>Error</div>;

    return isLoading ? <div>Loading...</div> : null;
  };

  return (
    <main id="app">
      <Search query={query} setQuery={setQuery} />
      {message()}
      <List users={users} query={query} />
    </main>
  );
}

function Search({ query, setQuery }) {
  return (
    <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
  );
}

function List({ users, query }) {
  const list = users.filter(
    ({ name, username, email }) =>
      name.toLowerCase().includes(query.toLowerCase()) ||
      email.toLowerCase().includes(query.toLowerCase()) ||
      username.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <ul>
      <div>results: {list.length}</div>
      {list.map(({ id, name, username, phone, email }) => (
        <li key={id}>
          <h2>{username}</h2>
          <div>
            <p>name: {name} </p>
            <p>
              email: <a href={email}>{email}</a>
            </p>
            <p>phone number: {phone}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default App;
