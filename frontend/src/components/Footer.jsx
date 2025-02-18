import React from 'react';

const Footer = () => {
  const year = new Date();

  return (
    <footer className="bg-gray-800 text-white py-6">
      {/* <div className="container mx-auto flex flex-col md:flex-row justify-between items-center"> */}
        <p className="text-center text-sm">&copy; {year.getFullYear()} companyname. All rights reserved.</p>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
