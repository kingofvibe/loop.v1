// 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import style
import "../assets/css/home.css";

// import svgs
import straight from "../assets/img/straight.svg";
import north from "../assets/img/north.svg";
import back from "../assets/img/back.svg"
import vid from '../assets/video/vid2.webm'

// import js
import horizontalScroll from "../js/horizontal-scroll";
const Home = () => {
 const [time, setTime] = useState('')
  setInterval(()=> {
   const myTime = new Date().toLocaleTimeString()
   setTime(myTime)
  },1000)
  useEffect(()=> {
    horizontalScroll()
  }, [])
  return (
    <>
      <div className="bg"></div>
      <div className="Home">
        <div className="video">
          <video src={vid} autoPlay loop></video>
        </div>
        <div className="header">
          <p className="">
            WE CREATE <br />
            <span>BEST DIGITAL</span> <br />
            <span>PRODUCTS.</span>
          </p>
          <div className="vid vid1"></div>
          <div className="vid vid2"></div>
           <div className="discuss">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <Link to={"/contact"}>
              Discuss <br /> The Project
            </Link>
          </div>
        </div>
        <div className="links">
         
          <div className="time" style={{transition: "1s all", fontWeight: "bold"}}>
             {time}
          </div>
          <div className="link_to_what_we_Do cool-link">
            <Link to="">
              WHO WE ARE
              <img src={straight} alt="" />
            </Link>
          </div>
        </div>
        <div className="heroTxt">
          <div className="txt-1">
            <p>
              WE ARE THE LEADERS IN WEB AND MOBILE <br />
              DESIGN AND DEVELOPMENT INDUSTRY.
            </p>
          </div>
          <div className="txt-2">
            we create quality content and cool ideas. we create websites,
            applications,
            <br />
            3D design, motion design and animation, we bring the most dearing
            idea to life
          </div>
        </div>
      </div>

      <div className="hero-works" id="work">
        <div className="sticky_wrapper">
          <p className="work-header">*WORK*</p>
          <div className="flex_wrapper">
              <div className="box">
                <div className="box-img">
                  <video src={vid}></video>
                </div>
                <div className="box-link">
                  <p>Artme</p>
                  <a href="http://" target="_blank" rel="noopener noreferrer" title="see live">
                    <img src={north} alt="" />
                  </a>
                </div>
              </div>

              <div className="box">
                <div className="box-img">
                  <video src={vid}></video>
                </div>
                <div className="box-link">
                  <p>Artme</p>
                  <a href="http://" target="_blank" rel="noopener noreferrer" title="see live">
                    <img src={north} alt="" />
                  </a>
                </div>
              </div>

              <div className="box">
                <div className="box-img">
                  <video src={vid}></video>
                </div>
                <div className="box-link">
                  <p>Artme</p>
                  <a href="http://" target="_blank" rel="noopener noreferrer" title="see live">
                    <img src={north} alt="" />
                  </a>
                </div>
              </div>

              <div className="box">
                <div className="box-img">
                  <video src={vid}></video>
                </div>
                <div className="box-link">
                  <p>Artme</p>
                  <a href="http://" target="_blank" rel="noopener noreferrer" title="see live">
                    <img src={north} alt="" />
                  </a>
                </div>
              </div>
              <div className="box">
                <figure>
                <img src={back} alt="" />
                </figure>
              </div>
          </div>
          
          </div>
      </div>
    </>
  );
};

export default Home;
