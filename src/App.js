import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookCards from './components/BookCards';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h2 className="heading">Book Finder</h2>
        <SearchBar/>
        <BookCards/>
      </div>
    );
  }
}

export default App;
