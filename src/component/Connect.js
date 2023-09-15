import React from "react";

function Connect() {
  return (
    <>
      <li className="nav-item dropdown has-megamenu ">
      
        <a className="nav-link nvabtn" href="/">
          Connect{" "}
         <i className="fa fa-angle-down  dropdown"></i>
        </a>
       
        
        <div className="dropdown-menu megamenu backgroundcolor " id="padding" role="menu">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-row-reverse">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </div>

                <div>
                  <div >
                    
                   <h3 className="fontsizeconnect" >Find Your Bezzy Community</h3>
                  </div>

                  <p className="fontsize-para">
                    Bezzy communities provide connections with others living
                    with chronic conditions. Join Bezzy on the web or mobile
                    app.
                  </p>
                </div>
                <div></div>

                <hr className="hrbold" />
              </div>
              {/* image section start */}

              <div className="col-md-12 d-flex">
                <div className="col-md-4">
                 
                    <div className="d-flex  margin10px planimage">
                      <img src="https://media.post.rvohealth.io/wp-content/uploads/2022/01/Bezzy-Breast-Cancer.png" alt="no image"/>
                      <div className="d-flex align-items-center">
                        <a className="dropdown-item backgroundcolor " href="/">
                          <h3 className="fontsize17">Breast Cancer</h3>
                        </a>
                      </div>
                    </div>
                  
                    <div className="d-flex  margin10px planimage">
                      <img src="https://media.post.rvohealth.io/wp-content/uploads/2022/01/Bezzy-Migraine.png" alt="no image"/>
                      <div className="d-flex align-items-center">
                        <a className="dropdown-item backgroundcolor " href="/">
                          <h3 className="fontsize17">Breast Cancer</h3>
                        </a>
                      </div>
                    </div>
                </div>
                <div className="col-md-4">
                 
                 <div className="d-flex  margin10px planimage">
                   <img src="https://media.post.rvohealth.io/wp-content/uploads/2022/01/Bezzy-Inflammatory-Bowel-Disease.png" alt="no image"/>
                   <div className="d-flex align-items-center">
                     <a className="dropdown-item backgroundcolor " href="/">
                       <h3 className="fontsize17">Breast Cancer</h3>
                     </a>
                   </div>
                 </div>
               
                 <div className="d-flex  margin10px planimage">
                   <img src="https://media.post.rvohealth.io/wp-content/uploads/2022/01/Bezzy-Multiple-Sclerosis.png" alt="no image"/>
                   <div className="d-flex align-items-center">
                     <a className="dropdown-item backgroundcolor " href="/">
                       <h3 className="fontsize17">Breast Cancer</h3>
                     </a>
                   </div>
                 </div>
             </div>
             <div className="col-md-4">
                 
                 <div className="d-flex  margin10px planimage">
                   <img src="https://media.post.rvohealth.io/wp-content/uploads/2022/01/Bezzy-Psoriatic-Arthritis.png" alt="no image"/>
                   <div className="d-flex align-items-center">
                     <a className="dropdown-item backgroundcolor " href="/">
                       <h3 className="fontsize17">Breast Cancer</h3>
                     </a>
                   </div>
                 </div>
               
                 <div className="d-flex  margin10px planimage">
                   <img src="https://media.post.rvohealth.io/wp-content/uploads/2022/04/Bezzy-PsO.png" alt="no image"/>
                   <div className="d-flex align-items-center">
                     <a className="dropdown-item backgroundcolor " href="/">
                       <h3 className="fontsize17">Breast Cancer</h3>
                     </a>
                   </div>
                 </div>
             </div>
              </div>
              <div className="col-md-12">
                
                  <div className="">
                    <h3 className="fontsizeconnect">Follow us on social media</h3>
                    <p className="fontsize-para">
                      Can't get enough? Connect with us for all things health.
                    </p>
                  </div>
{/* bottom line */}
                <hr className="hrbold" />
                {/* icons list  */}
                <div>
                 
                  <a className="" href="/"><i className="fa fa-facebook-f iconmar"></i></a>
                  <a className="" href="/"><i className="fa fa-twitter iconmar" ></i></a>
                  <a className="" href="/"><i className="fa fa-instagram iconmar" ></i></a>
                  <a className="" href="/"><i className="fa fa-linkedin iconmar" ></i></a>
                  <a className="" href="/"><i className="fa fa-youtube iconmar " ></i></a>
                  <a className="" href="/"><i className="fab fa-flipboard iconmar" ></i></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Connect;
