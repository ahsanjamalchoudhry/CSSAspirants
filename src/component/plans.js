import React from 'react'

function Plans() {
  return (
    <>
<li className="nav-item dropdown has-megamenu ">
      
      <a className="nav-link nvabtn" href="/">
        Plan{" "}
       <i className="fa fa-angle-down  dropdown"></i>
      </a>
     
      
      <div className="dropdown-menu megamenu backgroundcolor " id="padding" role="menu">
                  <div className="container">
                    <div className="row">
                    <div className="d-flex align-row-reverse">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </div>
                      <div className="col-md-3">
                        <div className="d-flex justify-content-between align-items-center ">
                         <h3 className='fontsize20'>Health Challenges</h3>
                          
                        </div>
                        <hr className="hr-healthcondition"></hr>
                        <a className="dropdown-item listfont" href="/">
                        Mindful Eating
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Sugar Savvy
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Move Your Body
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Gut Health
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Mood Foods
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Align Your Spine
                        </a>
                        
                      </div>
                      <div className="col-md-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className='fontsize20'>Find Care</h3>
                          <button className="arrowbtn fontsize20">
                            <i class="far fa-arrow-alt-circle-right"></i>
                          </button>
                        </div>
                        <hr className="hr-healthcondition"></hr>
                        <a className="dropdown-item listfont" href="/">
                        Primary Care
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Mental Health
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        OB-GYN
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Dermatologists
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Neurologists
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Cardiologists
                        </a>
                        <a className="dropdown-item listfont" href="/">
                        Orthopedists
                        </a>
                      </div>

                      <div className="col-md-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className='fontsize20'>Lifestyle Quizzes</h3>
                         
                        </div>
                        <hr className="hr-healthcondition"></hr>
                        <div className="d-flex ">
                         
                         
                            <a className="dropdown-item listfont" href="/">
                             Weight Management
                             </a>
                          
                        </div>
                        <div className="d-flex ">
                          
                          
                            <a className="dropdown-item listfont" href="/">
                              Am I Depressed? A Quiz for<br/> Teens</a>

                          
                        </div>
                        <div className="d-flex ">
                          <a className="dropdown-item listfont" href="/">
                              Are You a Workaholic?
                              </a>
                          
                        </div>
                        <div className="d-flex ">
                         
                            <a className="dropdown-item listfont" href="/">
                            How Well Do You Sleep?
                            </a>

                          
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className='fontsize20'>Tools & Resources</h3>
                         
                        </div>
                        <hr className="hr-healthcondition"></hr>
                        <div className="d-flex ">
                         
                         
                            <a className="dropdown-item listfont" href="/">
                            Health News
                             </a>
                          
                        </div>
                        <div className="d-flex ">
                          
                          
                            <a className="dropdown-item listfont" href="/">
                            Find a Diet</a>

                          
                        </div>
                        <div className="d-flex ">
                          <a className="dropdown-item listfont" href="/">
                          Find Healthy Snacks
                              </a>
                          
                        </div>
                        <div className="d-flex ">
                         
                            <a className="dropdown-item listfont" href="/">
                            Drugs A-Z
                            </a>

                          
                        </div>
                        <div className="d-flex ">
                         
                         <a className="dropdown-item listfont" href="/">
                         Health A-Z
                         </a>

                       
                     </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </li>
 </>
  )
}

export default Plans
