import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Categoriesdata from './Categoriesdata';
import { useState } from 'react';

const Categories = () => {
 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <div className="allcategories-box justify-content-between">
        <Carousel responsive={responsive} autoPlay={ true} infinite={true}>
          {[...Categoriesdata].map((item, index) => (
            <div className="categoriesimage " key={index}  >
              <img src={item.src} alt={item.alt} width={item.width} height={item.height} />
            </div>
          ))}
        </Carousel>
        
      
      </div>
      <div className="descriptiontext aligntext-left">
          <h3>
            All Categories (
            <a href="" className="viewlink">
              View All
            </a>
            )read Documents
          </h3>
        </div>
    </div>
  );
};

export default Categories;
