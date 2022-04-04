import React from 'react';
import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
        <Header />
        <NavBar />

        <div className = "banner">
            <img src = "https://i.pinimg.com/originals/0c/63/9c/0c639cde382ef232840150d4fb22a290.jpg" alt = "" />
        </div>

        <Footer />
    </div>
  )
}

export { AboutUs };