import React from 'react';
import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

const News = () => {
  return (
    <div>
        <Header />
        <NavBar />

        <div className="banner">
          
        </div>

        <main>
          News
        </main>

        <Footer />
    </div>
  )
}

export { News };