import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='Newsletter' />
        <h2 className='headtext__cormorant'>Subscribe To Our Newsletter</h2>
        <p className='p__opensans'>And NeverMiss Latest Updates</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Enter your e-mail adress' />
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
};

export default Newsletter;
