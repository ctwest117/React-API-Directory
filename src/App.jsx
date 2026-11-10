import React from "react";
import { fetchData } from "./fetch";

function App() {
  const [users, setUsers] = React.useState([]);
  const [query, setQuery] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [loadFailed, setFailed] = React.useState(false);

  React.useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      const data = await fetchData();
      if (!data) setFailed(true);
      else setFailed(false);
      setUsers(data || []);
      setLoading(false);
    }
    loadUsers();
  }, []);

  React.useEffect(() => console.log("loading", isLoading), [isLoading]);

  const message = () => {
    if (loadFailed) return <p>Fetch Failed</p>;
    return isLoading ? <p>Loading users...</p> : <></>;
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
    ({ name, username }) =>
      name.toLowerCase().includes(query.toLowerCase()) ||
      username.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <ul>
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
