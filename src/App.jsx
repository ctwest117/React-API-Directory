import React from "react";
import { useFetchData } from "./useFetch";
import { List } from "./modules/List";
import { Search } from "./modules/Search";

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const imagesUrl =
  "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10";

function App() {
  const { data, isLoading, err } = useFetchData(usersUrl);
  const { data: images } = useFetchData(imagesUrl);
  const [users, setUsers] = React.useState([]);

  const getImage = (indx) => {
    if (images[indx]) return images[indx];
    return {
      url: `data:image/svg+xml,${encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="150" height="150" fill="#e5e7eb"/><circle cx="75" cy="55" r="25" fill="#9ca3af"/><path d="M25 140a50 50 0 0 1 100 0" fill="#9ca3af"/></svg>',
      )}`,
      title: "Default user avatar",
    };
  };

  React.useEffect(
    () => setUsers(data.map((user, i) => ({ ...user, image: getImage(i) }))),
    [data, images],
  );

  const [query, setQuery] = React.useState("");

  const message = () => {
    if (err) return <div>Could not fetch Users. {err}</div>;

    return isLoading ? <div>Loading...</div> : null;
  };

  return (
    <main id="app">
      <h1>Users</h1>
      <Search query={query} setQuery={setQuery} />
      {message()}
      <List users={users} query={query} />
    </main>
  );
}

export default App;
