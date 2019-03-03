import React from 'react';
import '../style/BookCards.css';

class BookCards extends React.Component {

    render() {
        return(
            <section className='bookcards'>
                <div className='bookcards-alignment'>
                {
                this.props.items.map((item , i) => {
                        let {title, authors, publisher, imageLinks , infoLink} = item.volumeInfo
                        return (
                            <div className='bookcards-inner'>
                            <img className='book-image' id='img' src ={imageLinks !== undefined? imageLinks.thumbnail : ''} alt='book cover'></img>
                            <section className='book-detail'>
                                <h3 className='book-title'>{title}</h3>
                                <h4 className='book-author'>By: {authors}</h4>
                                <h4 className='book-publisher'>Published By: {publisher}</h4>
                            </section>
                            <a href ={infoLink} key={i}><button className='view-info-button'>See this Book</button></a>
                            </div>
                        );
                })
                }      
                </div>
            </section>
        );
    }
}

export default BookCards;