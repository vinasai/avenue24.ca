import React from 'react'
import Footer from './Footer';
import Header from './Header';
import backImg from "../assets/bg5.jpg"

const AboutUs = () => {
  return (
    <>
        <Header/>
    <section className="bg-cover bg-center flex items-center justify-center"style={{ backgroundImage: `url(${backImg})`, height: '70vh' }}>
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">"Our Story, Your Success!"</h1>
        </div>
    </section>

    <section className="bg-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <br></br>
        <br></br>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-8">
        We are committed to creating versatile and inspiring spaces that cater to the needs of educators, 
      artists, fitness enthusiasts, and creative professionals. Our goal is to provide a welcoming environment 
      that encourages growth, creativity, and community engagement. At the heart of our mission is a passion 
      for excellence and a dedication to serving our customers with integrity and care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
          Our mission is to provide high-quality, adaptable rental spaces that cater to the diverse needs of educators, 
          artists, fitness enthusiasts, and creative professionals, fostering a community where passion and purpose can thrive.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600">
          To be the leading space rental provider that empowers creativity, learning, and wellness by offering 
          versatile and inspiring environments for every purpose.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h3>
          <p className="text-gray-600">
            Our team consists of talented professionals who are dedicated to innovation and excellence, working together to achieve great results.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-gray-600">
            Have questions or want to get in touch? Feel free to reach out to us through our contact page.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default AboutUs