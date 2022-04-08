import React from 'react';
import './Footer.scss';

const headers = [
  { header: 'Quick Links' },
  { header: 'Legal' },
  { header: 'Information' }
];

// const links = [
//   { name: '' },
//   { name: '' },
//   { name: '' },
//   { name: 'POWER BI DESKTOP' },
//   { name: 'MOBILE' },
//   { name: 'SEE ALL DOWNLOADS' },
//   { name: '' },
//   { name: '' },
//   { name: '' },
//   { name: '' },
//   { name: '' },
//   { name: '' },
//   { name: '' },
//   { name: '' }
// ]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer_inner">
        <div className="footer_top">
          <div className="news">
            <h2 className='news_name'>Newsletter</h2>
            <span className='news_text'>Insights await in your company's data. Bring them into focus with BlueLance.</span>
            <form className='search_form'>
              <input type="text" placeholder="enter your email" className='input' />
              <button type="submit" className='input_button'><img src='./assets/images/right_button.png' /></button>
            </form>
          </div>
          <div className="footer_content">
            {/* {headers.map((header, index) => ( */}
            <div className="box">
              <h2 className='box_name'>Quick Links</h2>
              <nav className='list'>
                <ul className='list_item'>
                  <li className='list_link'>POWER BI DESKTOP</li>
                  <li className='list_link'>MOBILE</li>
                  <li className='list_link'>SEE ALL DOWNLOADS</li>
                  <li className='list_link'>POWER BI DESKTOP</li>
                  <li className='list_link'>MOBILE</li>
                  <li className='list_link'>SEE ALL DOWNLOADS</li>
                </ul>
              </nav>
            </div>
            {/* ))} */}
            <div className="box">
              <h2 className='box_name'>Legal</h2>
              <nav className='list'>
                <ul className='list_item'>
                  <li className='list_link'>PRIVACY & COOKIES</li>
                  <li className='list_link'>TERMS OF USE</li>
                  <li className='list_link'>TRADEMARKS</li>
                </ul>
              </nav>
            </div>
            <div className="box">
              <h2 className='box_name'>Information</h2>
              <nav className='list'>
                <ul className='list_item'>
                  <li className='list_link'>SUPPORT</li>
                  <li className='list_link'>BLOG</li>
                  <li className='list_link'>NEWSLETTER</li>
                  <li className='list_link'>PYRAMID ANALYTICS</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_line"></div>
          <div className="footer_bottom_inner">
            <h2 className='footer_bottom_name'>CRAFT LANCE</h2>
            <div className='footer_bottom_text'>
              <div>©Designed by Moin Khan. All Rights Reserved.</div>
              <div>Made by BlueLance</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
