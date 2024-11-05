// Navigation.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Nav>
      <NavItem as={Link} to="/">Home</NavItem>FAQs
      <NavItem as={Link} to="/about">About</NavItem>
      <NavItem as={Link} to="/FAQs">FAQs</NavItem>
      <NavItem as={Link} to="/features-benefits">Features-benefits</NavItem> {/* Make sure this matches your project page path */}
      <NavItem as={Link} to="/contact">Contact Us</NavItem> {/* Updated path for Contact Us */}
    </Nav>
  );
};

// Styled Components
const Nav = styled.nav`
  display: flex;
  font-family: 'Dosis', sans-serif; 
  gap: 54px;
  padding: 10px 20px; 
`;

const NavItem = styled.div`
  font-size: 20px; 
  color: #333;
  cursor: pointer;
  position: relative; 
  transition: color 0.5s, transform 0.2s; 

  &:hover {
    color: #388e3c; 
    transform: translateY(-2px); 
  }

  &:after {
    content: ''; 
    position: absolute;
    left: 50%;
    bottom: -5px; 
    width: 0; 
    height: 1px; 
    background-color: #388e3c; 
    transition: width 0.5s ease, left 0.3s ease; 
  }

  &:hover:after {
    width: 100%; 
    left: 0; 
  }
`;

export default Navigation;
