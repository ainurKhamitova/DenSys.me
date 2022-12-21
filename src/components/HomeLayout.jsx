import React from "react";
import { useNavigate } from "react-router-dom";

function HomeLayout() {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/appointment")
    }

  return <div>
  <header className="header-container">
               <div class="top-row">
                  <a>Welcome</a>
               </div>
        </header>
        <div class="slider slider-container">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 imageslid">
                      <img className="homeimg" src = {require('../images/mainhome.jpg')} />
                    </div>
                    <div class="col-md-6 contentslid">
                        <h1>DenSys.me</h1>
                        <h3>Hospital Management System </h3>
                        <p>Take care of your Health today!</p>
                        <button class="buttonADD" onClick={handleClick} >Book an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
        <section class="bg-06">
    <div class="container">
        <div class="row section-title">
            <h2>About us</h2>
            <p>The Swe Health System is a health care system providing exceptional medical care to our local and global communities. We have variety of services and professional specialists that are always ready to help our patients.</p>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <article class="blog-sub">
                    <div class="blog-content">
                      <img className = "blogimg" src = {require('../images/home1.jpeg')} />
                    </div>
                    <div class="blog-content-section">
                        <div class="blo-content-title">
                            <h4>Why it is time for a paradigm shift in lung cancer treatment</h4>
                            <p>Lung cancer remains the leading cause of cancer death worldwide. Tragically, the majority of patients are diagnosed at a late stage, with a minimal chance of surgical cure. Fortunately, the knowledge and the technology are now available to diagnose and treat lung cancer earlier, more accurately, and less invasively. Ronald Tabaksblat, Business Leader Image Guided Therapy Systems, reveals how.</p>
                        </div>
                        <div class="blog-admin">
                            <ol>
                                <li><i class="far fa-user"></i> By Madina</li>
                                <li><i class="far fa-calendar-alt"></i> November 28, 2022</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <article class="blog-sub">
                    <div class="blog-content">
                      <img className = "blogimg" src = {require('../images/home.jpg')} />
                    </div>
                    <div class="blog-content-section">
                        <div class="blo-content-title">
                            <h4>Five ways in which healthcare innovation has changed over the past 15 year</h4>
                            <p>LHow can healthcare providers and health technology companies partner up to address the rising demand for care and surging costs? Today’s world requires a new approach to innovation, argues Chief Technology Officer Henk van Houten as he looks back on the past 15 years. He envisions a future of value-based care, supported by open digital platforms and ‘systems of engagement’ that connect and interpret patient data from various sources to support caregivers with relevant insights at the point of care</p>
                        </div>
                        <div class="blog-admin">
                            <ol>
                                <li><i class="far fa-user"></i> By Ainur</li>
                                <li><i class="far fa-calendar-alt"></i> November 30, 2022</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                <article class="blog-sub">
                    <div class="blog-content">
                      <img className = "blogimg" src = {require('../images/home2.jpg')} />
                    </div>
                    <div class="blog-content-section">
                        <div class="blo-content-title">
                            <h4>Five ways in which the Internet of Things is transforming healthcare</h4>
                            <p>Imagine a future in which all healthcare professionals that are involved in the care for a patient have easy access to the same holistic view of that patient – whether it’s in a high-tech hospital room where the patient is about to undergo a life-saving operation, or during a video consult with a patient who calls for advice based on the latest health readings from her home therapy device. Chief Technology Officer Henk van Houten explains how the Internet of Things can help turn this vision into a reality..</p>
                        </div>
                        <div class="blog-admin">
                            <ol>
                                <li><i class="far fa-user"></i> By Zhanna</li>
                                <li><i class="far fa-calendar-alt"></i> November 20, 2022</li>
                            </ol>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>
    <footer>
    <div class="container">
        <div class="row" >
            <div>
                <h2>Contact Us</h2>
                <p>We provide services to help you remain healthy</p>
                <p>Our Address: Kabanbay Batyr ave., 53, Astana, Kazakhstan </p>
                <p>ainur.khamitova@nu.edu.kz</p>
                <p>askar.anafin@nu.edu.kz</p>
                <p>zhanna.mukhametsharip@nu.edu.kz</p>
                <p>madina.omarkulova@nu.edu.kz</p>
                <p>+7 7272 22 30 11</p>
                   
        </div>
    </div>
</div>



</footer>
<div class="copy">
    <a>SWE Final Project</a>
        <span>
        <a href="#" class="fa fa-facebook">  </a>
        <a href="#" class="fa fa-google">  </a>
        <a href="#" class="fa fa-linkedin">  </a>
        <a href="#" class="fa fa-youtube"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-skype"></a>
        </span>
    </div>
</div>
};

export default HomeLayout;