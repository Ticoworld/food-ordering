import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Our Company</h2>
            <p>
              Providing the best quality products and services for our customers. We are committed to excellence and customer satisfaction.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>&copy; 2024 Our Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
