import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        
        <a 
          href="mailto:santiago.gomez3@utp.edu.co"
          className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-300 mb-6"
        >
          <FaEnvelope className="mr-2" />
          Send an Email
        </a>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/Santiago3102" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a 
            href="https://linkedin.com/in/santiago-gomez-077319267/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a 
            href="https://www.instagram.com/santiago_gomez.31/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700"
          >
            <FaInstagram className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
