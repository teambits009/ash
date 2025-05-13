import React, { useState } from 'react';
import axios from 'axios'; // Ensure Axios is imported

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDonate = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/payments/create-payment-intent-handle-donate/`, {
        source: 'Techops',
        timestamp: new Date().toISOString(),
      });
      alert('Donation request sent successfully!');
      console.log('Donation response:', response.data);
    } catch (error) {
      alert('Failed to process donation. Please try again.');
      console.error('Donation error:', error);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sticky top-0 z-20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-tight">
          <img src="/images/logoo.png" alt="Ashamay Foundation logo" width="50" height="60" />
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Impact', 'Work', 'Projects', 'Join Us', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-lg hover:text-yellow-300 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <button
            onClick={handleDonate}
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300"
          >
            Donate Now
          </button>
        </div>
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-blue-900 text-white flex flex-col items-center space-y-4 py-6 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {['Home', 'About', 'Impact', 'Work', 'Projects', 'Join Us', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-lg hover:text-yellow-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={handleDonate}
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300"
          >
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const handleDonate = async (amount) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/payments/create-payment-intent/`, {
        amount: parseInt(amount),
        source: 'hero',
        timestamp: new Date().toISOString(),
      });
      alert(`Successfully processed $${amount} donation!`);
      console.log('Donation response:', response.data);
    } catch (error) {
      alert('Failed to process donation. Please try again.');
      console.error('Donation error:', error);
    }
  };

  return (
    <section id="home" className="bg-gradient-to-b from-gray-100 to-white py-24">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in">
          Transform Lives with Ashmay Foundation
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl animate-fade-in-delay">
          A single act of kindness can light up a child’s future. Join us in empowering orphans across Africa with love, care, and opportunity.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Every Dollar Makes a Difference</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['50', '100', '150', '200'].map(amount => (
            <button
              key={amount}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              onClick={() => handleDonate(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Heart, Our Mission</h2>
        <div className="space-y-12 max-w-3xl">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">A Legacy of Love</h3>
            <p className="text-gray-600 leading-relaxed">
              Born from a family’s unwavering generosity, Ashmay Foundation carries forward a tradition of compassion. In Guinea-Bissau, our founder’s parents ensured no child went hungry or felt alone. From Portugal to London, their kindness grew into a movement.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Founded in 2000 by Fatumata Djalo, Ashmay formalized this legacy, expanding support to orphans in Senegal, Gambia, Kenya, and Ghana. After losing her parents in 2024, Fatumata’s resolve deepened, transforming their vision into a global beacon of hope.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Purpose</h3>
            <p className="text-gray-600">To empower orphans with essentials, education, and opportunities for a brighter tomorrow.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Dream</h3>
            <p className="text-gray-600">A world where every child thrives, free from poverty, with access to safety, learning, and love.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <ul className="list-none text-gray-600 mx-auto max-w-md space-y-2">
              <li><strong>Compassion</strong> – Love and care for every child.</li>
              <li><strong>Integrity</strong> – Your donations directly transform lives.</li>
              <li><strong>Unity</strong> – Together, we build brighter futures.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const EmpoweringOrphans = () => {
  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Empowering Dreams</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Every orphan deserves a chance to shine. We provide the tools—nutrition, healthcare, and education—to help them soar.
        </p>
        <div className="space-y-12 max-w-3xl">
          <div className="bg-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Nourishing Futures</h3>
            <p className="text-white leading-relaxed">
              Hunger shouldn’t dim a child’s potential. Our programs deliver daily nutritious meals to orphans, fueling their growth and dreams through sustainable partnerships with local communities.
            </p>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Healing with Care</h3>
            <p className="text-white leading-relaxed">
              Health is hope. We ensure orphans receive check-ups, vaccinations, and critical treatments, partnering with clinics to provide life-changing medical care.
            </p>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Unlocking Knowledge</h3>
            <p className="text-white leading-relaxed">
              Education breaks barriers. We fund tuition, supply materials, and offer scholarships, empowering orphans to learn, grow, and shape their own futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurWork = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Where We Make a Difference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
          <div className="bg-blue-600 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Reach</h3>
            <p className="text-white mb-4">We uplift orphans in:</p>
            <ul className="list-none text-white mx-auto max-w-md space-y-4">
              <li className='flex items-center justify-start gap-4'><img src="/images/guinee.jpg" alt="Guinea-Bissau flag" width="30" height="40"/><p>🇬🇼 Guinea-Bissau</p></li>
              <li className='flex items-center justify-start gap-4'><img src="/images/senegal.jpg" alt="Senegal flag" width="30" height="40"/><p>🇸🇳 Senegal</p></li>
              <li className='flex items-center justify-start gap-4'><img src="/images/gambia.jpg" alt="Gambia flag" width="30" height="40"/><p>🇬🇲 Gambia</p></li>
              <li className='flex items-center justify-start gap-4'><img src="/images/kenya.jpg" alt="Kenya flag" width="30" height="40"/><p>🇰🇪 Kenya</p></li>
              <li className='flex items-center justify-start gap-4'><img src="/images/ghana.jpg" alt="Ghana flag" width="30" height="40"/><p>🇬🇭 Ghana</p></li>
            </ul>
          </div>
          <div className="bg-blue-600 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Impact</h3>
            <ul className="flex items-start flex-col list-none text-white mx-auto max-w-md space-y-2">
              <li><strong>Nutrition</strong> – Daily meals to end hunger.</li>
              <li><strong>Education</strong> – Fees and supplies for learning.</li>
              <li><strong>Shelter</strong> – Clothing and safe housing.</li>
              <li><strong>Healthcare</strong> – Access to essential care.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurProjects = () => {
  const projects = [
    {
      title: "Nutrition Program",
      description: "Providing nutritious meals to orphans, ensuring healthy growth and development through local partnerships.",
      image: "images/Project one four.jpg"
    },
    {
      title: "Food Donation Program",
      description: "Offering food supplies to orphans, empowering them with access to quality health.",
      image: "images/Project one two.jpg"
    },
    {
      title: "Outreach Program",
      description: "Delivering food to children, partnering with orphanages to save lives through food.",
      image: "images/St mathews 2.jpg"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Projects</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Discover the transformative projects we undertake to uplift orphans across Africa, bringing hope and opportunity to their lives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GetInvolved = () => {
  const handleDonate = async (amount) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/payments/create-payment-intent/`, {
        amount: parseInt(amount),
        source: 'get-involved',
        timestamp: new Date().toISOString(),
      });
      alert(`Successfully processed $${amount} donation!`);
      console.log('Donation response:', response.data);
    } catch (error) {
      alert('Failed to process donation. Please try again.');
      console.error('Donation error:', error);
    }
  };

  return (
    <section id="join-us" className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Be the Change</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Give Hope</h3>
            <p className="text-gray-600 mb-4">Your donation, big or small, transforms lives. Support a child’s future today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['50', '100', '150', '200'].map(amount => (
                <button
                  key={amount}
                  className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300"
                  onClick={() => handleDonate(amount)}
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-4">Lend your time or skills to make a difference. Join our mission to uplift children.</p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
              onClick={() => alert('Volunteer form coming soon!')}
            >
              Get Started
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fundraise</h3>
            <p className="text-gray-600 mb-4">Host an event or campaign to support our work. Every effort counts.</p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
              onClick={() => alert('Fundraising guide coming soon!')}
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-gray-50">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Visionary Leader</h2>
        <div className="flex flex-col items-center max-w-3xl">
          <div className="overflow-hidden w-64 h-64 bg-gray-300 rounded-full mb-6 flex items-center justify-center text-gray-600 shadow-lg">
            <img src="/images/CEO.jpeg" alt="Fatumata Djalo's Img" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Fatumata Djalo – Founder & Director</h3>
          <p className="text-gray-600 leading-relaxed">
            Inspired by her parents’ legacy, Fatumata Djalo founded Ashmay Foundation to empower orphans across Africa. Her passion and leadership have touched thousands of lives, providing food, healthcare, and education. With unwavering dedication, she continues to build a brighter future for children in need.
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactUs = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Connect With Us</h2>
        <div className="text-gray-600 space-y-3 max-w-md">
          <p><strong>Name:</strong> Fatumata Djalo</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:Ashmayinterpretings@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
              Ashmayinterpretings@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+447926577057" className="text-blue-600 hover:text-blue-800 transition-colors">
              +44 7926 577057
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

const FollowUs = () => {
  return (
    <section id="follow" className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Stay Connected</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map(platform => (
            <a
              key={platform}
              href={`https://${platform.toLowerCase()}.com`}
              className="text-blue-600 hover:text-blue-800 text-lg font-semibold transition-colors duration-300"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <p className="text-lg">Copyright © 2025 Ashmay Foundation. All rights reserved.</p>
        <p className="text-sm mt-2">Registered Charity No: +44 7926 577057</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#Privacy" className="hover:text-yellow-300 transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#Terms" className="hover:text-yellow-300 transition-colors duration-300">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <AboutUs />
      <EmpoweringOrphans />
      <OurWork />
      <OurProjects />
      <GetInvolved />
      <Leadership />
      <ContactUs />
      <FollowUs />
      <Footer />
    </div>
  );
};

export default App;