import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


const SliderHotCollections = ( { data } ) => {
    


    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,     
    slidesToScroll: 4,
    
    responsive: [         
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
return (
          
          <div >
              <Slider {...settings} >
                  {data.map((nft, id) => (
                      <div key={id}>
                          <NFTCard nft={nft}/>
                      </div>
                      
                  ))}
              </Slider> 
          </div>                  
 )
          
          
         
};

const NFTCard = ( {nft} ) => {

            const [isLoaded, setIsLoaded] = useState(false)
            return( <div style={{ position: "relative", 
                          minHeight: "380px" }}>
                              {!isLoaded &&  (
                                 <div className="skeleton nft_coll_Skeleton" 
                                      style={{ 
                                        position: "absolute", 
                                        height:"160px",
                                        width: "100%",
                                        backgroundColor: "gray",
                                        top: 0, left: 0, right: 0, 
                                        bottom: 0, zIndex: 2,
                                        borderRadius: "15px",
                                         }} /> 
                                      )}
                    
                                  
                              
                      
                  
                      <div className="nft_coll" >
                          <div className="nft_wrap" style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s ease" }} >
                              <Link to="/item-details">
                                  <img src={nft.nftImage} 
                                        className="lazy img-fluid" 
                                        
                                        onLoad = {() => {
                                               setTimeout(() => { 
                                                 setIsLoaded(true);
                                                 }, 300)
                                              }}
                                        alt="" 
                                  />
                              </Link>
                          </div>
                         {!isLoaded ? <div className="nft_coll_pp nft_coll_info" style={{display: "none"}} ></div> 
                         :
                         <div className="nft_coll_pp">
                              <Link to="/author">
                                  <img className="lazy pp-coll" src={nft.authorImage} alt="Author's Picture" />
                              </Link>
                              <i className="fa fa-check"></i>
                          </div>}
                           
                           
                      <div style={{ position: "relative", 
                          minHeight: "75px" }}>
                       {!isLoaded && (<div className="skeleton nft_text_skeleton"
                            style={{ 
                                        position: "absolute", 
                                        height:"24px",
                                        width:"100px",
                                        
                                        backgroundColor: "gray",
                                        top: 20, left: 85, right: 0, 
                                        bottom: 0, zIndex: 2,
                                        borderRadius: "2px",
                                         }}  />  
                                    )}

                            {!isLoaded ? <div className="nft_coll_info " style={{ display: "none"}}></div>
                              :
                              <div className="nft_coll_info ">
                              <Link to="/explore">
                                  <h4>{nft.title}</h4>
                              </Link>
                              <span>{nft.code}</span>
                          </div> }
                     </div>
                           
                            
                      </div>
                    </div>  
                        )
                      
    }


export default SliderHotCollections;