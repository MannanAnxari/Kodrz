import React from "react";
import Navbar from "../../components/Navbar";
import addParlx from "../../common/addParlx";

const AboutHeader = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => { 
    if (fixedHeader.current) {
      var slidHeight = fixedHeader.current.offsetHeight;
    }
    if (MainContent.current) {
      MainContent.current.style.marginTop = slidHeight + "px";
    }
  }, [fixedHeader, MainContent, navbarRef]);
  return (
    <>
     {/* <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt text-center mt-50">
                <h4 className="parlx">
                  Creativity involves breaking out of expected &amp; repeatable
                  patterns in order to look at things in different way than ever
                  before.
                </h4>
                <div className="bactxt custom-font valign">
                  <span className="full-width">Works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
     <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/slid/1.jpg)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>About Us</h1>
              <div className="path">
                <a href="#0">Home</a>
                <span>/</span>
                <a href="#0" className="active">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  
    );
};

export default AboutHeader;
