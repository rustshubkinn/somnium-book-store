const URL = 'https://api.itbook.store/1.0/new';

export const fetchBooks = async () => {
  const response = await fetch(`${URL}`);
  const result = await response.json();

  const books = Object.keys(result.books).map((b) => ({ ...result.books[b] }));

  return books;
};
