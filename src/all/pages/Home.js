import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../all/components/Hero";

import { JollaContext } from "../context/jollas";

const Home = () => {
    const { featured } = useContext(JollaContext);
    if (!featured.length) {
        return <h3>No Featured Jollas</h3>
    }
    return (
        <>
            <Hero />
            <section className="featured">
                <header className="featured-head">
                    <h3>Featured Collection</h3>
                </header>
                <div className="books featured-list">
                    {featured.map(({ id, image, title }) => (
                        <article key={id} className="book featured-book">
                            <div className="book-image">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`jollas/${id}`} className="btn book-link">details</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;