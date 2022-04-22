import React from 'react';

import './Services.scss';

const BOX_ITEMS = [
  { id: '1', boxName: 'BASIC', boxPrice: '$59' },
  { id: '2', boxName: 'STANDARD', boxPrice: '$79' },
  { id: '3', boxName: 'UNLIMITED', boxPrice: '$99' }
];

const BOX_CHECKING = [
  { id: '1', checkName: '20 Keyword (free)' },
  { id: '2', checkName: 'No time Tracking (free)' },
  { id: '3', checkName: '230 - Man Hour (free)' },
  { id: '4', checkName: 'News Letter (free)' }
]

const Services = () => {
  return (
    <section className='services'>
      <div className="services__inner">
        <h1 className='services__title title'>Affordable Services Package</h1>
        <div className="services__buttons">
          <button className='services__button services__button--left'>Business Edition</button>
          <button className='services__button services__button--right'>Community Edition</button>
          <span className='services__text'>OR</span>
        </div>
        <div className="services__row">
          {BOX_ITEMS.map(item => (
            <div className="item-services" key={item.id}>
              <div className="item-services__box">
                <div className="item-services__line"></div>
                <h2 className="item-services__title">{item.boxName}</h2>
                <div className="item-services__price-line"></div>
                <div className="item-services__price">
                  <span className='price'>{item.boxPrice}</span>
                  <span className='month'>per month</span>
                </div>
                <div className="item-services__checking">
                  {BOX_CHECKING.map(item => (
                    <span key={item.id} className="item-services__text"><input type="radio" className='item-services__input' />{item.checkName}</span>
                  ))}
                </div>
                <button className='item-services__button'>FREE NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
