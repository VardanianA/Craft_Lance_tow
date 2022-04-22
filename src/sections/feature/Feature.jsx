import React from 'react';

import icon1 from 'assets/images/1.png';
import icon2 from 'assets/images/2.svg';
import icon3 from 'assets/images/3.png';
import icon4 from 'assets/images/4.png';
import icon5 from 'assets/images/5.png';
import icon6 from 'assets/images/6.png';
import icon7 from 'assets/images/7.png';
import icon8 from 'assets/images/8.png';

import './Feature.scss';

const PLATFORM_ITEMS = [
  { id: '1', platformIcon: `${icon1}`, platformName: 'COMMUNITY EDITION', platformText: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { id: '2', platformIcon: `${icon2}`, platformName: 'COMMUNITY EDITION', platformText: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { id: '3', platformIcon: `${icon3}`, platformName: 'COMMUNITY EDITION', platformText: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { id: '4', platformIcon: `${icon4}`, platformName: 'COMMUNITY EDITION', platformText: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { id: '5', platformIcon: `${icon5}`, platformName: 'COMMUNITY EDITION', platformText: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { id: '6', platformIcon: `${icon6}`, platformName: 'COMMUNITY EDITION', platformText: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { id: '7', platformIcon: `${icon7}`, platformName: 'COMMUNITY EDITION', platformText: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { id: '8', platformIcon: `${icon8}`, platformName: 'COMMUNITY EDITION', platformText: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' }
];

const Feature = () => {
  return (
    <section className='feature'>
      <div className="feature__inner">
        <h1 className='feature__title title'>A Comprehensive Data Integration and Business Analytics Platform</h1>
        <div className="feature__row">
          {PLATFORM_ITEMS.map(item => (
            <div className="item-feature" key={item.id}>
              <div className="item-feature__box">
                <div className="item-feature__icon">
                  <img src={item.platformIcon} className="item-feature__img" />
                </div>
                <h2 className='item-feature__title'>{item.platformName}</h2>
                <p className='item-feature__text'>{item.platformText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature;
