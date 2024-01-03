// components/About.js
import React from 'react';
import jsonData from '../data.json';
import styles from './Instructor.module.css';
import Image from 'next/image';

const Instructor = () => {
  const createMarkup = (htmlContent) => ({ __html: htmlContent });

  const socialMediaIcons = {
    facebook: "/images/facebook-icon.png",
    twitter: "/images/twitter-icon.png",
    youtube: "/images/youtube-icon.png",
    instagram: "/images/instagram-icon.png",
  };

  const socialMediaNames = Object.keys(jsonData?.instructor?.social_media || {}).filter(
    (platform) => jsonData.instructor.social_media[platform]
  );

  return (
    <div style={{ paddingLeft: '80px' }}>
      <section className={styles.customListSection}>
        <h2>About the Instructor</h2>
        <div style={{ display: 'flex', minHeight: '40vh' }}>
          {/* Image column */}
          <div style={{ width: '50px', marginRight: '20px' }}>
            <Image
              src="/images/nityanand-profile.svg" // Replace with the actual path to your image
              alt="Instructor Avatar"
              width={50} // Adjust the width as needed
              height={50} // Adjust the height as needed
              className={styles.avatarImage}
            />
          </div>

          <div className={styles.customList}>
            <div dangerouslySetInnerHTML={createMarkup(jsonData?.about_instructor.html_content)} />
            <div style={{minHeight:'15vh'}}></div>
            <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center',paddingRight: '10%' }}>
              {socialMediaNames.map((platform) => (
                <div key={platform} style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={socialMediaIcons[platform]} alt={platform} width="20" height="20" style={{ marginRight: '5px' }} />
                  <span>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructor;
