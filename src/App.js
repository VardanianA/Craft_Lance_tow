import React from 'react';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Home from 'pages/home/Home';
import Community from 'pages/community/Community';
import SignUp from 'pages/signUp/SignUp';
import Services from 'pages/services/Services';
import Feature from 'pages/feature/Feature';
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
