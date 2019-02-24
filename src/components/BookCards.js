import React from 'react';
import '../style/BookCards.css';

class BookCards extends React.Component {
    render() {
        return(
            <div className='bookcards'>
              <image></image>
              <h3>title</h3>
              <h4>by</h4>
              <h4>publishedby</h4>
              <button className='view-button'></button>
            </div>
        );
    }
}

export default BookCards;