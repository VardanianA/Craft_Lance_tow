import React from 'react';
import './Contact.scss';

const images = [
  { name: 'facebook-f-brands' },
  { name: 'twitter-brands' },
  { name: 'google-plus-g-brands' },
  { name: 'linkedin-in-brands' }
];

const Contact = () => {
  return (
    <section className='top_header'>
      <div className="top_header_inner">
        <div className="item1">
          {images.map((img, index) => (
            <div className="social_media_icons" key={index}><img src={`./assets/icons/${img.name}.svg`} className='img' /></div>
          ))}
        </div>
        <div className="item2">
          <div className="contact_icons"><img src='./assets/icons/phone-solid.svg' className='img' /><span className='contact'>+44 99151012545</span></div>
          <div className="contact_icons"><img src='./assets/icons/envelope-solid.svg' className='img' /><span className='contact'>contact@bluelance.com</span></div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
