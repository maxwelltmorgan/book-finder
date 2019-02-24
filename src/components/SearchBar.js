import React from 'react';
import '../style/SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return(
            <form className='search-bar'>
                <div className='search-inner'>
                    <input className='search-input' type="text" placeholder="Search by book title or author..."/>
                    <button>Search</button>
                </div>
            </form>
        );
    }
}

export default SearchBar;