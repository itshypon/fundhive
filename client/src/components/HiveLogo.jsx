import React from 'react';

const HiveLogo = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" />
      <path d="M50 20L76.6 35V65L50 80L23.4 65V35L50 20Z" fill="white" />
      <path d="M50 40L63.3 47.5V62.5L50 70L36.7 62.5V47.5L50 40Z" fill="currentColor" />
    </svg>
  );
};

export default HiveLogo;

