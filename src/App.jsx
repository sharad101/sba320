import { useState, useEffect } from "react";
import SearchBar from './components/SearchBar/SearchBar';
import BookList from './components/BookList/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Book Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <BookList books={books} />
    </div>
  );
};

export default App;
