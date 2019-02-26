import React from 'react';
import '../style/SearchBar.css';

class SearchBar extends React.Component {

    render() {
        return(
            <form className='search-bar' onSubmit={this.props.search}>
                <div className='search-inner'>
                    <input className='search-input' name='topic' type="text" placeholder="Search by book title or author..."/>
                    <button className="search-button">Search</button>
                </div>
            </form>
        );
    }
}

export default SearchBar;