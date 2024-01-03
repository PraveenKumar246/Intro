// components/About.js
import React from 'react';
import styles from './Reviews.module.css'
import jsonData from '../data.json';
import Image from 'next/image';

const Reviews = () => {
  return (
    <div className={styles.background}>
      <div className={styles.customData}>
        <h2>‟{jsonData?.testimonial?.text}”</h2>
        <div style={{ display: 'flex',justifyContent:'center' }}>
            {/* Image column */}
              <div>
                  <Image
                      src="/images/review-img.svg" // Replace with the actual path to your image
                      alt="Instructor Avatar"
                      width={50}
                      height={50}
                      className={styles.avatarImage}
                    />
                </div>
                <div className={styles.customList}>
                    <div className={styles.name}>{jsonData?.testimonial?.reviewer_name}</div>
                    <div className={styles.designation}>{jsonData?.testimonial?.reviewer_designation}</div>
                </div>
          </div>
      </div>
    </div>
  );
};

export default Reviews;
