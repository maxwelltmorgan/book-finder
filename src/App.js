import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookCards from './components/BookCards';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items: []
    };
  };

  search = (e) => {
    e.preventDefault();
    const topic = e.target.elements.topic.value;
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + topic;
    fetch(BASE_URL, {method:"GET"})
    .then(response =>  response.json())
    .then(json => {
      let {items} = json;
      this.setState({
        items: items
      })
      console.log(json);
      console.log(items[0].volumeInfo.imageLinks.thumbnail);
      console.log(items[0].volumeInfo.title);
      console.log(items[0].volumeInfo.authors[0]);
      console.log(items[0].volumeInfo.publisher);
      console.log(items[0].volumeInfo.infoLink);
    })
  };

  render() {
    return (
      <div className="App">
        <h2 className="heading">Book Finder</h2>
        <SearchBar search={this.search}/>
        <BookCards items={this.state.items}/>
      </div>
    );
  }
}

export default App;
