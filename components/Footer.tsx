
import React from 'react';

interface FooterProps {
  designerName: string;
}

const Footer: React.FC<FooterProps> = ({ designerName }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} {designerName}. All rights reserved.</p>
        <p className="text-sm mt-2">Crafted with React, Tailwind CSS, and AI 🚀</p>
      </div>
    </footer>
  );
};

export default Footer;
