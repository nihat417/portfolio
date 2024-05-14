"use client"
// components/StarryBackground.js
import React, { useEffect } from 'react';
import styles from '../../../assets/css/StarryBackground.module.css';

const StarryBackground = () => {
  useEffect(() => {
    const numStars = 100;
    const starsContainer = document.getElementById('stars-container');
    for (let i = 0; i < numStars; i++) {
      let star = document.createElement('div');
      star.className = styles.star;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      star.style.animationDuration = `${Math.random() * 5 + 5}s`;
      starsContainer.appendChild(star);
    }
  }, []);

  return <div id="stars-container" className={styles.starsContainer}></div>;
};

export default StarryBackground;
