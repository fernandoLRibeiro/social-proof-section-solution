import React from "react";
import styles from "../styles/Rating.module.css";
import Image from "next/image";

function Rating({ stars, source, marginRight }) {
  return (
    <div
      className={styles.ratingContainer}
      style={{
        marginRight: marginRight,
      }}
    >
      <div className={styles.starsContainer}>
        {[...Array(stars)].map((star) => (
          <div className={styles.star}>
            <Image
              src="/images/icon-star.svg"
              width="15px"
              height="15px"
              alt="star icon"
            />
          </div>
        ))}
      </div>
      <div>
        <h5 className={styles.ratingHeader}>
          Rated {stars} stars in {source}
        </h5>
      </div>
    </div>
  );
}

export default Rating;
