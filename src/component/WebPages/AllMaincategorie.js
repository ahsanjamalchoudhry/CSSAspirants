import React from 'react';
import './AllMaincategorie.css';
import Cardmaincategories from './Cardmaincategories';
import Maincategoriesdata from './Maincategoriesdata'; // Import your data source
import Footer from './Homepage/Footers';

function AllMaincategorie() {
  return (
    <>
    <div className=' flex 1 1 auto bg-color paddingbottom'>
      <div className="">
        <h1 className='mainheading'>Main categories</h1>
      </div>
      <div className="d-flex justify-content-between maincataegory-cards row col-md-12">
        {Maincategoriesdata.map((category) => (
          <div className="col-md-4 my-2" key={category.title}>
            <Cardmaincategories
              img={category.img}
              title={category.title ? category.title.slice(0, 40) : ""}
              content={category.content ? category.content.slice(0, 50) : ""}
              Url={category.Url}
            />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AllMaincategorie;
