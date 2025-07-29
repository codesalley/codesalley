
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-slate-500">
          <p>&copy; {currentYear} Code Salley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
