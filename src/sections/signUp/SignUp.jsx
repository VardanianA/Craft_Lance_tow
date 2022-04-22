import React from 'react';

import angle_up from 'assets/icons/angle-up-solid.svg';
import angle_down from 'assets/icons/angle-down-solid.svg';
import right_bracket from 'assets/icons/right-to-bracket-solid.svg';
import white_right_bracket from 'assets/icons/white_right_bracket.png';
import complete_icon from 'assets/icons/complete.png';
import sign_icon from 'assets/icons/sign.png';

import './SignUp.scss';

const COMMUNITY_ITEMS = [
  { id: '1', iconName: `${white_right_bracket}`, text: 'Community Edition' },
  { id: '2', iconName: `${complete_icon}`, text: 'Complete SignUp Process' },
  { id: '3', iconName: `${sign_icon}`, text: 'Sign up' }
];

const SignUp = () => {
  return (
    <section className='sign-up'>
      <div className="sign-up__inner">
        <h2 className='sign-up__header-title'>Community Sign Up</h2>
        <div className="sign-up-process">
          <div className="sign-up-process__images">
            <img src={right_bracket} className='sign-up-process__image sign-up-process__image--right' />
          </div>
          <div className="sign-up-process__content">
            <div className="sign-up-process__icons">
              <div className='sign-up-process__img'>
                <img src={angle_up} className='sign-up-process__img sign-up-process__img--up' />
              </div>
              <div className='sign-up-process__img'>
                <img src={angle_down} className='sign-up-process__img sign-up-process__img--down' />
              </div>
            </div>
            <h1 className='sign-up-process__title'>SIGNUP PROCESS</h1>
            <ol className='sign-up-process__list'>
              <li className='sign-up-process__list-link'>User enters email address</li>
              <li className='sign-up-process__list-link'>Clicks on "Sign up for free"</li>
            </ol>
          </div>
        </div>
        <div className="sign-up-footer">
          {COMMUNITY_ITEMS.map(item => (
            <div className="sign-up-footer__ellipse" key={item.id}>
              <div className="sign-up-footer__icons">
                <img src={item.iconName} className='sign-up-footer__img' />
              </div>
              <span className='sign-up-footer__footer-text'>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignUp;
