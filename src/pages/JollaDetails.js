import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { JollaContext } from "../context/jollas";
import { CartContext } from "../context/cart";

const JollaDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { jollas } = useContext(JollaContext);
  const { addToCart } = useContext(CartContext);

  const jolla = jollas.find((jolla) => {
    return jolla.id === id;
  });
  if (!jolla) {
    return <h3>Loading...</h3>;
  }

  const { image: url, name, description, author, price } = jolla;

  return (
    <section className="book-details">
      <div className="detail-image">
        <img src={url} alt="10x Rule" />
      </div>
      <div className="detail-description">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{author}</h3>
        <h4>Price - $ {price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...jolla, id });
            history.push("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default JollaDetails;
