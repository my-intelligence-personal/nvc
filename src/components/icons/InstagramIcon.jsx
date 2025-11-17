
import React from 'react';

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#instagramGradient)" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.5" />
    <circle cx="17" cy="7" r="1" fill="white" />
  </svg>
);

export default InstagramIcon;

