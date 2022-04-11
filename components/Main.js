import React, { useEffect, useState } from "react";
import { ratings, testimonials } from "../utils/data";
import styles from "../styles/Main.module.css";
import Rating from "./Rating";
import Testimonial from "./Testimonial";

function Main() {
  const [isMobileSize, setIsMobileSize] = useState(false);

  const useWindowSize = () => {
    useEffect(() => {
      if (typeof window !== undefined) {
        const handleResize = () => {
          if (window.innerWidth <= 870) {
            setIsMobileSize(true);
          } else {
            setIsMobileSize(false);
          }
        };

        window.addEventListener("resize", handleResize);

        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return isMobileSize;
  };

  useWindowSize();

  return (
    <main className={styles.main}>
      <div className={styles.upperHalf}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>
            10,000+ of our users love our products.
          </h1>
          <p className={styles.p}>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className={styles.ratingsContainer}>
          {ratings.map((rating, index) => (
            <Rating
              stars={rating.stars}
              source={rating.source}
              marginRight={
                isMobileSize ? "0" : `${(ratings.length - (index + 1)) * 3}em`
              }
            />
          ))}
        </div>
      </div>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <Testimonial
            image={testimonial.image}
            author={testimonial.author}
            isVerified={testimonial.isVerified}
            text={testimonial.text}
            marginTop={isMobileSize ? "0" : `${index * 1}em`}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
