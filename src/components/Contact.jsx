import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="px-6 py-7 bg-gray-50">
      <h2 className="text-gray-900 text-center font-bold lg:text-2xl text-xl py-4">Contact Us</h2>
      <p className="text-center mb-4 text-gray-700">Have any questions or messages? Contact us, we are available 24/7 to assist you.</p>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
