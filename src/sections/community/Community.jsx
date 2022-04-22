import React from 'react';

import './Community.scss';

const Community = () => {
  return (
    <section className='community'>
      <div className="community__inner">
        <form className='search-form'>
          <input type="text" placeholder='Enter your email address' className='search-form__input' />
          <input type="submit" value="Use it free" className='search-form__button' />
        </form>
        <p className='community__text'>By clicking Use if tree, you agree to the Power BI Terms of Service.</p>
      </div>
    </section>
  )
}

export default Community;
