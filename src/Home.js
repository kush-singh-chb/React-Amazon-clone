import { uniqueId } from "lodash";
import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-YTY1OTIxNzgt-w1500._CB417541669_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            key={uniqueId()}
            id={1123123}
            title="The Lean Startup"
            price={29.99}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876l/10127019.jpg"
            rating={5}
          />
          <Product
            key={uniqueId()}
            id={2132312}
            title="Samsung Galaxy Buds+ - Black (UK Version)"
            price={99.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61Plg7wUPaL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key={uniqueId()}
            id={1123123}
            title="The Lean Startup"
            price={29.99}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876l/10127019.jpg"
            rating={5}
          />
          <Product
            key={uniqueId()}
            id={2132312}
            title="Samsung Galaxy Buds+ - Black (UK Version)"
            price={99.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61Plg7wUPaL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            key={uniqueId()}
            id={1123123}
            title="The Lean Startup"
            price={29.99}
            image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876l/10127019.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key={uniqueId()}
            id={2132312}
            title="Samsung Galaxy Buds+ - Black (UK Version)"
            price={99.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61Plg7wUPaL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
