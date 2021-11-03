import { useEffect, useState } from 'react';
import { arrayOf, func, shape } from 'prop-types';

import { Book } from 'components/Book/Book';
import { Loader } from 'components/UI/Loader/Loader';
import { SearchField } from 'components/UI/SearchField/SearchField';

import { fetchBooks } from 'api';

import classes from './Booklist.module.scss';

export const Booklist = ({ addToCart, cart }) => {
  const [loading, setLoading] = useState(false);
  const [booklist, setBooks] = useState([]);
  const [searchField, setSearchField] = useState('');

  const getBooks = async () => {
    setLoading(true);
    const books = await fetchBooks();
    setBooks(books);
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const renderBooks = booklist.map((book) => (
    <Book
      key={book.title}
      image={book.image}
      title={book.title}
      book={book}
      price={book.price}
      addToCart={addToCart}
      cart={cart}
    />
  ));

  const handleSearchFieldChange = (e) => setSearchField(e.target.value);

  const filteredBooks = booklist.filter((book) =>
    book.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const filteredRes = filteredBooks.map((book) => (
    <Book
      key={book.title}
      image={book.image}
      title={book.title}
      book={book}
      price={book.price}
      addToCart={addToCart}
      cart={cart}
    />
  ));

  return (
    <>
      <SearchField
        onChange={handleSearchFieldChange}
        className={classes.search}
      />
      <Loader loading={loading} />
      {searchField === '' ? (
        <section>{renderBooks}</section>
      ) : (
        <section>{filteredRes}</section>
      )}
    </>
  );
};

Booklist.propTypes = {
  addToCart: func.isRequired,
  cart: arrayOf(shape({})).isRequired,
};
