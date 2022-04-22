import React from 'react';

import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';

import Home from 'sections/home/Home';
import Community from 'sections/community/Community';
import SignUp from 'sections/signUp/SignUp';
import Services from 'sections/services/Services';
import Feature from 'sections/feature/Feature';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Contact />
      <Header />
      <section className='sections'>
        <Home />
        <Community />
        <SignUp />
        <Services />
        <Feature />
      </section>
      <Footer />
    </div>
  );
}

export default App;
