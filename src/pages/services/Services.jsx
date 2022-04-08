import React from 'react';
import './Services.scss';

const boxes = [
  { name: 'BASIC', price: '$59' },
  { name: 'STANDARD', price: '$70' },
  { name: 'UNLIMITED', price: '$99' }
];

const box_ckeck = [
  { name: '20 Keyword (free)' },
  { name: 'No time Tracking (free)' },
  { name: '230 - Man Hour (free)' },
  { name: 'News Letter (free)' }
]

const Services = () => {
  return (
    <section className='services'>
      <h1 className='services_name'>Affordable Services Package</h1>
      <div className="services_buttons">
        <button className='services_button left'>Business Edition</button>
        <button className='services_button right'>Community Edition</button>
        <span className='services_text'>OR</span>
      </div>
      <div className="services_inner">
        {boxes.map((box, index) => (
          <div className="box" key={index}>
            <div className="box_line"></div>
            <h2 className='box_name'>{box.name}</h2>
            <div className="box_price_line"></div>
            <div className="box_price">
              <span className='price'>{box.price}</span>
              <span className='month'>per month</span>
            </div>
            <div className="box_ckeck">
              {box_ckeck.map((box, index) => (
                <span key={index}><input type="radio" className='input_box_ckeck' />{box.name}</span>
              ))}
            </div>
            <button className='box_button'>FREE NOW</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;
