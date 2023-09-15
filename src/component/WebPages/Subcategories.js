import React from "react";
import "./AllMaincategorie.css";
import Footer from './Homepage/Footers'
function Subcategories() {
  return (
    <>
      <div
        className="subcatgoryname"
        style={{
          backgroundImage:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAA1BMVEX/qqp7CReiAAAAJUlEQVR4nO3BAQEAAACAkP6v7ggKAAAAAAAAAAAAAAAAAAAAAAZChgABiyUD6gAAAABJRU5ErkJggg==)",
          width: "100%",
          height: "300px",
        }}
      >
        {/* main image of the sub-category page */}
        <div>
          <p className="subcate-head-title">Randaom Name</p>
          <p className="subcate-head-text">
            random the Tips and tools to support your health & wellbeing with
            IBD
          </p>
        </div>
      </div>
      {/* first a grid container  wtih left large image */}
        <div className="container  ">
          <div className="featured">FEATURED</div>
          <hr className="hr-healthcondition"></hr>
        </div>
        <div>
      
        <div className="gridcontainer container marginbottom ">
          <div className="grid1-leftitem1 griditem">
            <div className="grid1-leftimage">
              <a href="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwILFWl0sJjjAY3K5w1mfopLw-alGzvTOSOw&usqp=CAU"
                  alt=""
                  width={"90%"}
                  height={"500px"}
                />
              </a>
            </div>

            <div className="grid1-heading">
              <a href="">
                <h1 className="fontsize38 ">Heading there is randam text</h1>
                <p className="fontsize16 aligntext-left">
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator.
                </p>
              </a>
            </div>
          </div>
          <div className="grid1-rightitem2 griditem d-flex">
            <div className="grid1-rightimage">
              <a href="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwILFWl0sJjjAY3K5w1mfopLw-alGzvTOSOw&usqp=CAU"
                  alt=""
                  className="grid1-rightimage"
                />
              </a>
            </div>
            <div className="">
              <a href="">
                <p className="fontsize26">
                  Number of Kids with Type 2 Diabetes May Jump 700% In Next 3
                  Decades
                </p>
              </a>
              <a href="">
                <p className="sabcate-para">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate{" "}
                </p>
              </a>
            </div>
          </div>
          <div className="grid1-rightitem2 griditem d-flex">
            <div className="grid1-rightimage">
              <a href="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwILFWl0sJjjAY3K5w1mfopLw-alGzvTOSOw&usqp=CAU"
                  alt=""
                  className="grid1-rightimage"
                />
              </a>
            </div>
            <div className="">
              <a href="">
                <p className="fontsize26">
                  Number of Kids with Type 2 Diabetes May Jump 700% In Next 3
                  Decades
                </p>
              </a>
              <a href="">
                <p className="sabcate-para">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate{" "}
                </p>
              </a>
            </div>
          </div>
          <div className="grid1-rightitem2 griditem d-flex">
            <div className="grid1-rightimage">
              <a href="">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwILFWl0sJjjAY3K5w1mfopLw-alGzvTOSOw&usqp=CAU"
                  alt=""
                  className="grid1-rightimage"
                />
              </a>
            </div>
            <div className="">
              <a href="">
                <p className="fontsize26">
                  Number of Kids with Type 2 Diabetes May Jump 700% In Next 3
                  Decades
                </p>
              </a>
              <a href="">
                <p className="sabcate-para">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate{" "}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default Subcategories;
