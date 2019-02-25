import React from 'react';
import '../style/SearchBar.css';

class SearchBar extends React.Component {

    search = (e) => {
        e.preventDefault();
        const topic = e.target.elements.topic.value;
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + topic;
        fetch(BASE_URL, {method:"GET"})
        .then(response =>  response.json())
        .then(json => {
          console.log(json);
        })
      };

    render() {
        return(
            <form className='search-bar' onSubmit={this.search}>
                <div className='search-inner'>
                    <input className='search-input' name='topic' type="text" placeholder="Search by book title or author..."/>
                    <button className="search-button">Search</button>
                </div>
            </form>
        );
    }
}

export default SearchBar;