import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { JollaContext } from '../context/jollas';


const Books = () => {
    const { jollas } = useContext(JollaContext);

    if (!jollas.length) {
        return <h3>No Books Available</h3>
    }

    return (
        <section className="books">
            {jollas.map(({ image: image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`jollas/${id}`} className="btn book-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Books
