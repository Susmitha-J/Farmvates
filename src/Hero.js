import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backgroundVideo from './assets/background.mp4'; // Adjust the path as necessary

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade animation

  const slides = [
    {
      title: 'FarmVates AgriTech company',
      subtitle: 'FarmVates is an AgriTech company committed to revolutionizing pest management through innovative, AI-driven technologies.',
    },
    {
      title: 'Empowering Farmers',
      subtitle: 'Our mission is to empower farmers to make data-informed decisions, optimize chemical use, enhance crop quality, and contribute to sustainable agriculture.',
    },
    {
      title: 'Proactive Pest Management',
      subtitle: 'We provide farmers with the tools to tackle pest pressure proactively, improving yield and decreasing the environmental footprint of farming.',
    },
  ];

  const handleNext = () => {
    setFade(false); // Start fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Change slide
      setFade(true); // Start fade in
    }, 500); // Duration of fade out
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <HeroSection>
      <BackgroundVideo autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <HeroText $fade={fade}>
        <HeroTitle>{slides[currentIndex].title}</HeroTitle>
        <HeroSubtitle>{slides[currentIndex].subtitle}</HeroSubtitle>
      </HeroText>
    </HeroSection>
  );
};

// Styled Components
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align to the left */
  height: 100vh;
  width: 100%;
  color: white;
  position: relative;
  overflow: hidden; /* Prevent overflow from video */
  box-sizing: border-box;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire section */
  z-index: 0; /* Keep the video in the background */
`;

const HeroText = styled.div`
  width: 600px; /* Fixed width */
  height: auto; /* Allow height to adjust based on content */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center text vertically */
  align-items: flex-start; /* Align text to the left */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  opacity: ${(props) => (props.$fade ? 1 : 0)}; /* Control opacity for fade effect */
  transform: scale(${(props) => (props.$fade ? 1 : 0.8)}); /* Scale effect */
  transition: opacity 0.5s ease, transform 0.5s ease; /* Transition for fade and scale effect */
  margin-left: 110px; /* Align text to the left */
`;


const HeroTitle = styled.h1`
  font-size: 58px;
  line-height: 1.2;
  margin: 20px 0;
  color: white;
  font-family: 'Dosis', sans-serif;
  font-weight: 900;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin: 20px 0;
  line-height: 1.5;
  font-family: 'Dosis', sans-serif;
`;

export default Hero;
