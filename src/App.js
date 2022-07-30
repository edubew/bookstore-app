import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Categories from './components/Categories';

export class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to="/">Bookstore CMS</Link>
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
