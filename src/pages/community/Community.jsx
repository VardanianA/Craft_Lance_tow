import React from 'react';
import './Community.scss';

const Community = () => {
  return (
    <section className='community'>
      <form className='form'>
        <input type="text" placeholder='Enter your email address' className='input' />
        <input type="submit" value="Use it free" className='button' />
      </form>
      <p className='community_text'>By clicking Use if tree, you agree to the Power BI Terms of Service.</p>
    </section>
  )
}

export default Community;
