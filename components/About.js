// components/About.js
import React from 'react';
import jsonData from '../data.json';
import styles from './About.module.css'; 

const About = () => {
    const { what_to_expect, key_topics } = jsonData.course;

  const createMarkup = (htmlContent) => ({ __html: htmlContent });
  return (
    <div style={{paddingLeft:'80px'}}>
      <h2>About the Course</h2>
      <p>In high school, the language I most fell in love with happened to be a dead one: Latin. Sure, it’s spoken at the Vatican, and when I first began to study the tongue of Virgil and Catullus, friends joked that I could only use it if I moved to Rome. </p> 
      <p>Tempting, but church Latin barely resembles the classical written language, a highly formal grammar full of symmetries and puzzles. You don’t speak classical Latin; you solve it, labor over it, and gloat, to no one in particular, when you’ve rendered it somewhat intelligible.</p>
      <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.”</p>

      <section className={styles.customListSection}>
        <h2>What to expect from the course</h2>
        <div className={styles.customList} dangerouslySetInnerHTML={createMarkup(what_to_expect.html_content)} />
    </section>

    <section className={styles.customListSection}>
        <h2>Key topics covered</h2>
        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <div className={styles.customList} dangerouslySetInnerHTML={createMarkup(key_topics.html_content)} />
    </section>
    </div>
  );
};

export default About;
