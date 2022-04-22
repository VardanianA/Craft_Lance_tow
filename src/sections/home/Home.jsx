import React from 'react';

import homeImage from 'assets/images/home_img.png';

import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className="home__inner">
        <h1 className='home__title'>Bring your Big Data to Life With Craft Lance</h1>
        <p className='home__text'>Blue Lance transforms your company's data into rich visuals for you to collect and organize so you can focus on what matters to you. Stay in the know, spot trends as they happen, and push your business further.</p>
        <div className="home__image">
          <img src={homeImage} className='home__img' />
        </div>
      </div>
    </section>
  )
}

export default Home;
