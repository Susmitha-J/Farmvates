// App.js
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturesBenefits from './FeaturesBenefits'; // Updated import
import AuthorBio from './AuthorBio';
import Testimonials from './Testimonials';
import FAQs from './FAQs';
import ContactForm from './ContactForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation'; // Ensure this component exists

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturesBenefits />
            <AuthorBio /> 
            <Testimonials />
            <FAQs />  
          </>
        } />
        <Route path="/features-benefits" element={<FeaturesBenefits />} />
        <Route path="/contact" element={<ContactForm />} /> {/* Ensure this path is correct */}
      </Routes>
    </Router>
  );
};

export default App;
