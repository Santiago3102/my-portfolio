import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">
          You can reach me via email at{' '}
          <a 
            href="mailto:santiago.gomez3@utp.edu.co"
            className="text-emerald-500 hover:underline"
          >
            santiago.gomez3@utp.edu.co
          </a>
        </p>
        <a 
          href="mailto:santiago.gomez3@utp.edu.co"
          className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-300"
        >
          <FaEnvelope className="mr-2" />
          Send an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
