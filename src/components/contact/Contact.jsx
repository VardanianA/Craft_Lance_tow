import React from 'react';

import facebook_icon from 'assets/icons/facebook-f-brands.svg';
import twitter_icon from 'assets/icons/twitter-brands.svg';
import google_icon from 'assets/icons/google-plus-g-brands.svg';
import linkedin_icon from 'assets/icons/linkedin-in-brands.svg';
import phone_icon from 'assets/icons/phone-solid.svg';
import envelope_icon from 'assets/icons/envelope-solid.svg';

import './Contact.scss';

const SOCIAL_ITEMS = [
  { id: '1', url: 'facebook', logoName: `${facebook_icon}` },
  { id: '2', url: 'twitter', logoName: `${twitter_icon}` },
  { id: '3', url: 'google', logoName: `${google_icon}` },
  { id: '4', url: 'linkedin', logoName: `${linkedin_icon}` }
];

const CONTACT_ITEMS = [
  { id: '1', contactName: `${phone_icon}`, text: '+44 99151012545' },
  { id: '2', contactName: `${envelope_icon}`, text: 'contact@bluelance.com' }
];

const Contact = () => {
  return (
    <section className='top-header'>
      <div className="top-header__inner">
        <div className="top-header__item1">
          {SOCIAL_ITEMS.map(item => (
            <div className="top-header__social-icons" key={item.id}>
              <a href={`https://www.${item.url}.com`} target="_blank">
                <img src={item.logoName} className='top-header__social-img' />
              </a>
            </div>
          ))}
        </div>
        <div className="top-header__item2">
          {CONTACT_ITEMS.map(item => (
            <div className="top-header__contact-icons" key={item.id}>
              <img src={item.contactName} className='top-header__contact-img' />
              <span className='top-header__contact'>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact;
