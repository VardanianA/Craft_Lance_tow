import React from 'react';
import './Feature.scss';

const boxes = [
  { img: '1', name: 'COMMUNITY EDITION', text: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { img: '2', name: 'COMMUNITY EDITION', text: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { img: '3', name: 'COMMUNITY EDITION', text: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { img: '4', name: 'COMMUNITY EDITION', text: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { img: '5', name: 'COMMUNITY EDITION', text: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { img: '6', name: 'COMMUNITY EDITION', text: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { img: '7', name: 'COMMUNITY EDITION', text: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' },
  { img: '8', name: 'COMMUNITY EDITION', text: 'Visually explore your data through a free-form drag-and-drop canvas, a broad range of modern data visualizations, and an easy-to-use report authoring experience.' }
];

const Feature = () => {
  return (
    <section className='feature'>
      <h1 className='feature_name'>A Comprehensive Data Integration and Business Analytics Platform</h1>
      <div className="feature_inner">
        {boxes.map((box, index) => (
          <div className="box" key={index}>
            <div className="box_line"></div>
            <img src={`./assets/images/${box.img}.png`} className="box_img" />
            <h2 className='box_name'>{box.name}</h2>
            <p className='box_text'>{box.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feature;
