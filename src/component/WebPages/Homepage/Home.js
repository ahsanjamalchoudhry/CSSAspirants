import React from "react";
import Categories from "./Categories";
import Important from "./Important";
import Articles from "./Articles";
import Allcourses from "./Allcourses";
import Allevents from "./Allevents";
import Notescience from './Notescience';
import Footer from "./Footers";
import AllMaincategorie from "../AllMaincategorie";
import "react-multi-carousel/lib/styles.css";
import StoryModal from "./StoryModal";




function Home() {
 

  return (
    <>
      <section className="container">
        <div className="banner  d-flex">
          <div className="bannertext">
            <div className="banner-heading">
              <h1>Welcome To The Pakistan's Largest Competitive community </h1>
            </div>
            <div className="banner-para">
              <h6>
                A time when you repeatedly hit yourself in response to either
                defeat or upset. Could be - losing in a tennis match and using
                the racket on your leg
              </h6>
            </div>

            <div className="banner-button d-flex">
              <button className="banner-btn">
                <h5>Click Here</h5>
              </button>
            </div>
          </div>
          <div className="bannerimage">
            <img
              src="data:image/png;base64,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"
              alt=""
              width={"350"}
              height={"400"}
            />
          </div>
        </div>
 <Categories/>
     <Articles/>
        <div className="post-section">
          <div className="post-heading aligntext-left">
            <h3>Post</h3>
          </div>
          <div className="d-flex justify-content-between">
            <div className="posts">
    
              <div className="d-flex  padding-bottom">
                <div>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                    alt=""
                    className="post-image"
                  />
                </div>
                <div className="aligntext-left margin10px">
                  <span className="fontsize18 aligntext-left">
                    No height when the content div expands
                  </span>
                  <p className="paragraphStyle">
                    Reimagining masculinity Reimagining masculinity Reimagining
                    masculinity Reimagining masculinity Reimagining masculinity.
                  </p>
                </div>
              </div>
              <div className="d-flex padding-bottom ">
                <div>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                    alt=""
                    className="post-image"
                  />
                </div>
                <div className="aligntext-left margin10px">
                  <span className="fontsize18 aligntext-left">
                    No height when the content div expands
                  </span>
                  <p className="paragraphStyle">
                    Reimagining masculinity Reimagining masculinity Reimagining
                    masculinity Reimagining masculinity Reimagining masculinity.
                  </p>
                </div>
              </div>
            </div>
            <div className="posts">
              <div className="d-flex padding-bottom">
                <div>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                    alt=""
                    className="post-image"
                  />
                </div>
                <div className="aligntext-left margin10px">
                  <span className="fontsize18 aligntext-left">
                    No height when the content div expands
                  </span>
                  <p className="paragraphStyle">
                    Reimagining masculinity Reimagining masculinity Reimagining
                    masculinity Reimagining masculinity Reimagining masculinity.
                  </p>
                </div>
              </div>
              <div className="d-flex padding-bottom">
                <div>
                  <img
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b639dc78330081.5ceea9bc5b1ef.gif"
                    alt=""
                    className="post-image"
                  />
                </div>
                <div className="aligntext-left margin10px">
                  <span className="fontsize18 aligntext-left">
                    No height when the content div expands
                  </span>
                  <p className="paragraphStyle">
                    Reimagining masculinity Reimagining masculinity Reimagining
                    masculinity Reimagining masculinity Reimagining masculinity.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="articlestext aligntext-left">
            <h3>
              All Authors ({" "}
              <a href="" className="viewlink">
                View All
              </a>{" "}
              )read Docoments
            </h3>
          </div>
        <Important/>
       <Allcourses/>
       <Allevents desctext={"All Events"} heading={"Events"}/>
       <Notescience/>
       <Allevents desctext={"Our CSS Aspirant"} heading={"Aspirants"}/>
       {/* <StoriesComponent/> */}
      </section>
      <StoryModal/>
      <Footer/>
 
    </>
  );
}

export default Home;
