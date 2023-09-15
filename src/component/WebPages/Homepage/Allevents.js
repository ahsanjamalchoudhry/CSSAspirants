import React from 'react'
import Alleventdata from './Alleventsdata'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Allevents({ desctext, heading }) {
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:4
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
    <>
    
      <div>
        <div className="descriptiontext aligntext-left">
          <h3>{desctext}</h3>
        </div>
        <div className="important-box">
          <div className='d-flex justify-content-between'>
            <div className="importantbox-heading aligntext-left">
              <h3>{heading}</h3>
            </div>
            <div className=''>
              <a href='/' className='textdec-none fontsize20'> View All <i className="far fa-arrow-alt-circle-right"></i></a>
            </div>
          </div>
          
          <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={3000}>
  {[...Alleventdata].map((event, index) => (
    <div className="allariticles-box d-flex" key={index}>
      <div className='articlesimage'>
        <img src={event.imageSrc} alt={event.altText} width={event.width} height={event.height} />
        <p className='paragraphStyle'>{event.paragraph}</p>
      </div>
    </div>
  ))}
</Carousel>


       
         
          
        </div>
      </div>
    </>
  )
}

export default Allevents

