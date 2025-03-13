import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import pic1 from "../assets/a241.png"
import pic2 from "../assets/5.jpg"
import pic3 from "../assets/a243.jpg"
import pic4 from "../assets/a24.png"
import Slider from "./Slider"
import MovingSlider from './MovingSlider'

const Home = () => {
  return (
    <>
    <Header/>
    <Slider/>
<section className="py-12 bg-gray-100">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
    <div className="md:w-1/2">
      <img 
        src={pic1} 
        alt="Beautiful Home" 
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="md:w-1/2 md:pl-8 text-center md:text-left">
      <h2 className="text-3xl font-bold mt-6 md:mt-0">Space for Tuition </h2>
      <p className="mt-4 text-gray-700">
        Our rental space is the perfect setting for your tuition classes. Designed to provide a quiet, 
        comfortable, and professional environment, it’s ideal for one-on-one sessions or small group lessons. 
        Whether you're teaching academic subjects, language courses, or specialized skills, our space offers flexibility 
        and focus for both teachers and students. The bright, spacious room is fully equipped to support your teaching needs, 
        and with its convenient location, it ensures an accessible and welcoming environment for learners. Rent our space today 
        and create the ideal atmosphere for your educational sessions!
      </p>
    </div>
  </div>
</section>


<section className="py-12 bg-gray-100">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 order-2 md:order-1 md:pr-8 text-center md:text-left">
      <h2 className="text-3xl font-bold mt-6 md:mt-0">Space for Studio</h2>
      <p className="mt-4 text-gray-700">
      Looking for the perfect space to bring your creative vision to life? 
      our space offers an ideal environment for photographers, artists, dancers, musicians, and creators of all kinds. Whether 
      you’re working on a photo shoot, rehearsing for a performance, or recording your next project, our studio provides a comfortable and inspiring atmosphere to fuel your creativity. 
      Rent our studio today and take your work to the next level! 
      </p>
    </div>
    <div className="md:w-1/2 order-1 md:order-2">
      <img 
        src={pic2} 
        alt="Beautiful Home" 
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

<section className="py-12 bg-gray-100">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
    <div className="md:w-1/2">
      <img 
        src={pic3} 
        alt="Beautiful Home" 
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="md:w-1/2 md:pl-8 text-center md:text-left">
      <h2 className="text-3xl font-bold mt-6 md:mt-0">Space for Dance Class</h2>
      <p className="mt-4 text-gray-700">
      Looking for the perfect space to host your dance classes? Our rental space is designed for dancers of all 
      styles, featuring spacious wooden flooring, mirrors, and a sound system to enhance your sessions. Whether 
      you're teaching ballet, hip-hop, salsa, or contemporary, our venue provides a comfortable and inspiring atmosphere for 
      students of all levels. Book your space today and bring your choreography to life!      
      </p>
    </div>
  </div>
</section>

<section className="py-12 bg-gray-100">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 order-2 md:order-1 md:pr-8 text-center md:text-left">
      <h2 className="text-3xl font-bold mt-6 md:mt-0">Space for Yoga Class</h2>
      <p className="mt-4 text-gray-700">
      Create a serene and welcoming environment for your yoga classes in our rental space. Designed for relaxation and 
      mindfulness, our venue offers a quiet atmosphere, ample natural light, and a comfortable, open layout for group or 
      private sessions. Whether you're teaching Vinyasa, Hatha, or meditation classes, our space provides the perfect setting 
      for your students to find balance and inner peace. Reserve your spot now!  
      </p>
    </div>
    <div className="md:w-1/2 order-1 md:order-2">
      <img 
        src={pic4} 
        alt="Beautiful Home" 
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

<section className="py-12 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">
      Experience Our Space: A Glimpse into Your Future Venue
    </h2>
    <p className="text-gray-600 mb-8">
      Take a look at our real spaces, designed to cater to your needs. Whether for tuition, creative work, dance, or relaxation, 
      our spaces are crafted for the perfect experience.
    </p>
    <MovingSlider />
  </div>
</section>

<Footer/>
    </>
  )
}

export default Home
