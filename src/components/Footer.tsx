import React, { FC } from 'react';
import './Footer.scss';

interface FooterProps {
  socialMediaIcons: string[];
}

const Footer: FC<FooterProps> = ({ socialMediaIcons }) => {
  return (
    <footer className="footer-container">
      {/* First Row */}
      <div className="social-media">
        {socialMediaIcons.map((icon, index) => (
          <a key={index} href={`link-to-your-social-media-profile-${index + 1}`} 
            target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={`Social Media ${index + 1}`} />
          </a>
        ))}
      </div>

      {/* Second Row */}
      <div className="footer-text">
        <p>Copyright ©2020 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
