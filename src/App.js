import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Categories from './components/Categories';
import BookList from './components/BookList';
// import InputForm from './components/InputForm';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Bookstore CMS</Link>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    {/* <InputForm /> */}
  </Router>
);

export default App;
