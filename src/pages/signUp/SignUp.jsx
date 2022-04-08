import React from 'react';
import './SignUp.scss';

const SignUp = () => {
  return (
    <section className='signUp'>
      <div className="signUp-inner">
        <h2 className='signUp-inner_text'>Community Sign Up</h2>
        <div className="signUp_process">
          <img src='./assets/icons/angle-up-solid.svg' className='signUp_process_img' />
          <img src='./assets/icons/angle-down-solid.svg' className='signUp_process_img' />
          <div className="signUp_process-inner">
            <div className="image">
              <img src='./assets/icons/right-to-bracket-solid.svg' className='signUp_process-inner_img' />
            </div>
            <div className="signUp_process-content">
              <h1 className='signUp_process-content-text'>SIGNUP PROCESS</h1>
              <ol className='list'>
                <li className='list_link'>User enters email address</li>
                <li className='list_link'>Clicks on "Sign up for free"</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="signUp_footer">
          <div className="signUp_footer-ellipse">
            <div className="signUp_footer-ellipse_image">
              <img src='./assets/icons/right-to-bracket-solid.svg' className='signUp_footer_img' />
            </div>
            <span className='signUp_footer-ellipse_text'>Community Edition</span>
          </div>
          <div className="signUp_footer-ellipse">
            <div className="signUp_footer-ellipse_image">
              <img src='./assets/icons/right-to-bracket-solid.svg' className='signUp_footer_img' />
            </div>
            <span className='signUp_footer-ellipse_text'>Complete SignUp Process</span>
          </div>
          <div className="signUp_footer-ellipse">
            <div className="signUp_footer-ellipse_image">
              <img src='./assets/icons/right-to-bracket-solid.svg' className='signUp_footer_img' />
            </div>
            <span className='signUp_footer-ellipse_text'>Sign up</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp;
