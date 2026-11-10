import React from "react";

export function useFetchData(url) {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setErr(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading, err };
}
