import React from 'react';
import '../style/BookCards.css';

class BookCards extends React.Component {

    render() {
        return(
            <section className='bookcards'>
                <div className='bookcards-inner'>
                    <img className='book-image' id='img' src='http://books.google.com/books/content?id=f5b-CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=' alt='book cover'></img>
                    <section className='book-detail'>
                        <h3 className='book-title'>Harry Potter and the Cursed Child - Parts One and Two (Special Rehearsal Edition)</h3>
                        <h4 className='book-author'>By: No Authors Found</h4>
                        <h4 className='book-publisher'>Published By: Pottermore Publishing</h4>
                    </section>
                    <a href='http://books.google.com/books?id=PLS_c2v7gP0C&dq=football&hl=&source=gbs_api'><button className='view-info-button'>See this Book</button></a>
                </div>
            </section>
        );
    }
}

export default BookCards;