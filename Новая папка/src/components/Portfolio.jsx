import React from 'react';
import '../css/portfolio.scss';
import { CarouselWrapper } from 'react-pretty-carousel'

const Portfolio = () => {
  return <div>
      <div className="portfolio"><div className="container">
        <CarouselWrapper items='3'  mode='gallery' autoPlay='true' >
          
          <div className="wrap">
            <img width='100%' src="/img/portfolio1.png" alt="" />
          </div>
          <div className="wrap">
            <img width='100%' src="/img/portfolio2.png" alt="" />
          </div>
          <div className="wrap">
            <img width='100%' src="/img/portfolio3.png" alt="" />
          </div>
          <div className="wrap">
            <img width='100%' src="/img/portfolio3.png" alt="" />
          </div>
          <div className="wrap">
            <img width='100%' src="/img/portfolio3.png" alt="" />
          </div>
          <div className="wrap">
            <img width='100%' src="/img/portfolio3.png" alt="" />
          </div>
        </CarouselWrapper>
        </div>
      </div>


  </div>;
};

export default Portfolio;
