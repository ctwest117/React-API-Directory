export function Search({ query, setQuery }) {
  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
      {query && <p>Searching for {query}</p>}
    </>
  );
}
