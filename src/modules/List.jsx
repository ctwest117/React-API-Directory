export function List({ users, query }) {
  const list = users.filter(
    ({ name, username, email }) =>
      name.toLowerCase().includes(query.toLowerCase()) ||
      email.toLowerCase().includes(query.toLowerCase()) ||
      username.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <ul>
      <div>results: {list.length}</div>
      {list.length > 0 ? (
        list.map(({ id, name, company, phone, email, image }) => (
          <li key={id}>
            <img src={image.thumbnailUrl} alt={image.title} />
            <h2>{name}</h2>
            <div>
              <p>Company: {company.name}</p>
              <ul>
                <p>contact info: </p>
                <li>
                  email: <a href={email}>{email}</a>
                </li>
                <li>phone number: {phone}</li>
              </ul>
            </div>
          </li>
        ))
      ) : (
        <p>No results</p>
      )}
    </ul>
  );
}
