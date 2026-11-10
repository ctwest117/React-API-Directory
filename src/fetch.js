export async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (e) {
    console.error("Failed to fetch data ", e);
  }
}
