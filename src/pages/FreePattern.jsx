import React from 'react';
import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

const FreePattern = () => {
  return (
    <div>
        <Header />
        <NavBar />

        <div className="banner">
          
        </div>
        
        <main>
          FreePattern
        </main>

        <Footer />
    </div>
  )
}

export { FreePattern };