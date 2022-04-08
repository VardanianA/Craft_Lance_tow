import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className="home_inner">
        <h1 className='home_name'>Bring your Big Data to Life With Craft Lance</h1>
        <p className='home_text'>Blue Lance transforms your company's data into rich visuals for you to collect and organize so you can focus on what matters to you. Stay in the know, spot trends as they happen, and push your business further.</p>
        <div className="home_bg_img">
          <img src='./assets/images/home_img.png' className='img' />
        </div>
      </div>
    </section>
  )
}

export default Home;
