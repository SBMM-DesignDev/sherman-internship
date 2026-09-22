import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const LandingIntro = () => {

  useEffect(() => {

      setTimeout(() => {
         AOS.init({
        duration: "1000"
      });
      }, 300);

  },[]);

  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_wallet" 
                  data-aos="fade-up" 
                  data-aos-easing="ease-out-cubic"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-bottom" ></i>
              <div className="text">
                <h4 className="">Set up your wallet</h4>
                <p  data-aos="fade-up"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_wallet" ></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_cloud-upload_alt" 
                data-aos="fade-up"
                data-aos-easing="ease-out-sine"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
               ></i>
              <div className="text">
                <h4 id="h4_addNFT" className="">Add your NFT's</h4>
                <p  data-aos="fade-up"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_cloud-upload_alt" ></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-sm-30" >
            <div className="feature-box f-boxed style-3" style={{ overflow: "hidden",}}>
              <i className="bg-color-2 i-boxed icon_tags_alt" 
                 data-aos="fade-up"
                  data-aos-easing="ease-out-quad"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-bottom"
                 ></i>
              <div className="text">
                <h4 className="">Sell your NFT's</h4>
                <p data-aos="fade-up"
                   data-aos-easing="ease-out"
                   data-aos-once="true"
                   data-aos-anchor-placement="top-bottom">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_tags_alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  };

export default LandingIntro;
