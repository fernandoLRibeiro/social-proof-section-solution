import React from "react";
import styles from "../styles/Testimonial.module.css";
import Image from "next/image";

function Testimonial({ image, author, isVerified, text, marginTop }) {
  return (
    <div
      className={styles.testimonialContainer}
      style={{
        marginTop: marginTop,
      }}
    >
      <div className={styles.buyerInfoContainer}>
        <img
          src={image}
          className={styles.buyerImage}
          alt={`${author}'s profile picture`}
        />
        <div className={styles.buyerInfo}>
          <h5 className={styles.author}>{author}</h5>
          {isVerified ? (
            <p className={styles.verifiedBadge}>Verified Buyer</p>
          ) : null}
        </div>
      </div>
      <div className={styles.buyerReviewContainer}>
        <p className={styles.review}>{`"${text}"`}</p>
      </div>
    </div>
  );
}

export default Testimonial;
