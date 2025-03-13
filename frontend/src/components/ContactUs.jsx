import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import backImg from "../assets/a5.jpg"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://avenue24.ca/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', number: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <Header />
    <section className="bg-cover bg-center flex items-center justify-center"style={{ backgroundImage: `url(${backImg})`, height: '90vh' }}>
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">"Have Questions? Let's Chat!"</h1>
        </div>
      </section>
      <section className="py-12 bg-gray-100">

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white p-8 rounded-lg shadow-lg" style={{backgroundColor:'#fafad2'}} >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Location</h2>
      <p className="text-gray-700 mb-4">
        Visit us at our office or contact us for any inquiries.
      </p>
      <div className="space-y-4">
        <div className="flex items-center text-gray-700">
          <FiMapPin className="h-6 w-6 mr-3 text-gray-600" />
          <span>2450 Morningside Ave Unit 11, Scarborough, ON M1X 2E5, Canada</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FiMail className="h-6 w-6 mr-3 text-gray-600" />
          <span>ratnamsan@gmail.com</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FiPhone className="h-6 w-6 mr-3 text-gray-600" />
          <span>+1 416-459-7519</span>
        </div>
      </div>
    </div>


      <div className="rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7816422183027!2d-79.23175268450138!3d43.83001587911519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d4e16aa20991%3A0xf498e9e9b1bb8d61!2s2450%20Morningside%20Ave%20Unit%2011%2C%20Scarborough%2C%20ON%20M1X%202E5%2C%20Canada!5e0!3m2!1sen!2s!4v1613788971863!5m2!1sen!2s"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="2450 Morningside Ave Unit 11, Scarborough, ON M1X 2E5, Canada"
    ></iframe>
    </div>

  </div>


  <div className="flex justify-center items-center mt-12">
  <div className="w-3/5 bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          rows="5"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-800 text-white py-2 px-6 rounded-lg hover:bg-blue-900 transition duration-300"
        >
          Send 
        </button>
      </div>
    </form>
  </div>
</div>

</section>

      <Footer />
    </>
  );
};

export default ContactUs;
