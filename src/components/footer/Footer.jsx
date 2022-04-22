import React from 'react';

import right_button from 'assets/images/right_button.png';

import './Footer.scss';

// const HEADER_ITEMS = [
//   { id: '1', headerName: 'Quick Links' },
//   { id: '2', headerName: 'Legal' },
//   { id: '3', headerName: 'Information' }
// ];

const QUICK_LINKS = [
  { id: '1', url: 'power', linkName: 'POWER BI DESKTOP' },
  { id: '2', url: 'mobile', linkName: 'MOBILE' },
  { id: '3', url: 'downloads', linkName: 'SEE ALL DOWNLOADS' },
  { id: '5', url: 'power', linkName: 'POWER BI DESKTOP' },
  { id: '4', url: 'mobile', linkName: 'MOBILE' },
  { id: '6', url: 'downloads', linkName: 'SEE ALL DOWNLOADS' }
];

const LEGAL_LINKS = [
  { id: '1', url: 'privacy&cookies', legalName: 'PRIVACY & COOKIES' },
  { id: '2', url: 'terms', legalName: 'TERMS OF USE' },
  { id: '3', url: 'trademarks', legalName: 'TRADEMARKS' }
];

const INFORMATION_LINKS = [
  { id: '1', url: 'support', informationName: 'SUPPORT' },
  { id: '4', url: 'developers', informationName: 'DEVELOPERS' },
  { id: '2', url: 'blog', informationName: 'BLOG' },
  { id: '3', url: 'newsletter', informationName: 'NEWSLETTER' },
  { id: '5', url: 'analytics', informationName: 'PYRAMID ANALYTICS' }
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer-news">
            <h2 className='footer-news__title'>Newsletter</h2>
            <p className='footer-news__text'>Insights await in your company's data. Bring them into focus with BlueLance.</p>
            <form className='footer-news__search-form'>
              <input type="text" placeholder="enter your email" className='footer-news__input' />
              <button type="submit" className='footer-news__button'><img src={right_button} /></button>
            </form>
          </div>
          <div className="footer-content">
            <div className="footer-content__box">
              <h2 className='footer-content__title'>Quick Links</h2>
              {QUICK_LINKS.map(item => (
                <nav className='footer-content__list' key={item.id}>
                  <ul className='footer-content__inner'>
                    <li className='footer-content__list-item'>
                      <a href={`/${item.url}`} className="footer-content__list-link">{item.linkName}</a>
                    </li>
                  </ul>
                </nav>
              ))}
            </div>
            <div className="footer-content__box">
              <h2 className='footer-content__title'>Legal</h2>
              {LEGAL_LINKS.map(item => (
                <nav className='footer-content__list' key={item.id}>
                  <ul className='footer-content__inner'>
                    <li className='footer-content__list-item'>
                      <a href={`/${item.url}`} className="footer-content__list-link">{item.legalName}</a>
                    </li>
                  </ul>
                </nav>
              ))}
            </div>
            <div className="footer-content__box">
              <h2 className='footer-content__title'>Information</h2>
              {INFORMATION_LINKS.map(item => (
                <nav className='footer-content__list' key={item.id}>
                  <ul className='footer-content__inner'>
                    <li className='footer-content__list-item'>
                      <a href={`/${item.url}`} className="footer-content__list-link">{item.informationName}</a>
                    </li>
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footer__bottom">
          <div className="footer-inner">
            <h2 className='footer-inner__title'>CRAFT LANCE</h2>
            <div className='footer-inner__text'>
              <span>©Designed by Moin Khan. All Rights Reserved.</span>
              <span>Made by BlueLance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
