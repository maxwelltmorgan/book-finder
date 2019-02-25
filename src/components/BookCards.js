import React from 'react';
import '../style/BookCards.css';

class BookCards extends React.Component {

    render() {
        return(
            <section className='bookcards'>
                <div className='bookcards-inner'>
                    <img className='book-image' id='img' src='../../../book-icon.png' alt='book cover'></img>
                    <section className='book-detail'>
                        <h3 className='book-title'>Harry Potter and the Cursed Child - Parts One and Two (Special Rehearsal Edition)</h3>
                        <h4 className='book-author'>By: No Authors Found</h4>
                        <h4 className='book-publisher'>Published By: Pottermore Publishing</h4>
                    </section>
                    <button className='view-info-button'>See this Book</button>
                </div>
            </section>
        );
    }
}

export default BookCards;