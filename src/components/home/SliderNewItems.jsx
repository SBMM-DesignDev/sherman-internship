import React, { useEffect, useState} from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import NFTCountdown from './NFTCountdown';


const SliderNewItems = ( { data } ) => {

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
      },
      {
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
                          <NFTCard nft={nft} />
                      </div>
                      
                  ))}
              </Slider> 
          </div>                  
 )
}

 const NFTCard = ( {nft} ) => {

    
 
             const [isLoaded, setIsLoaded] = useState(false)

             
             
             return( <div>
                        <div className="nft__item" >
                              
                               {!isLoaded ? <div className="author_list_pp" style={{display:"none"}} ></div> 
                               :<div className="author_list_pp">
                                  <Link
                                    to="/author"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Creator: Monica Lucas"
                                  >
                                    <img className="lazy" src={nft.authorImage} alt="" />
                                    <i className="fa fa-check"></i>
                                  </Link>
                                </div>} 

                                {nft.expiryDate && isLoaded && (
                                <div className="de_countdown">
                                  <NFTCountdown nft={nft} /> 
                                </div>
                                  ) } 
                                    <div className="nft__item_wrap" >
                                      <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                          <button>Buy Now</button>
                                          <div className="nft__item_share">
                                            <h4>Share</h4>
                                            <a href="" target="_blank" rel="noreferrer">
                                              <i className="fa fa-facebook fa-lg"></i>
                                            </a>
                                            <a href="" target="_blank" rel="noreferrer">
                                              <i className="fa fa-twitter fa-lg"></i>
                                            </a>
                                            <a href="">
                                              <i className="fa fa-envelope fa-lg"></i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                            
                                      <div style={{ position: "relative", 
                                              minHeight: "380px" }}>
                                                    {!isLoaded &&  (
                                                      <div className="skeleton nft_coll_Skeleton" 
                                                          style={{ 
                                                            position: "absolute", 
                                                            height:"250px",
                                                            
                                                            width:"250px",
                                                            width: "100%",
                                                            backgroundColor: "gray",
                                                            top: 0, left: 0, right: 0, 
                                                            bottom: 0, zIndex: 5,
                                                            borderRadius: "15px" }} />

                                                            
                                                          )} 
                                          <Link to="/item-details">
                                            <img
                                              src={nft.nftImage}
                                              className="lazy nft__item_preview"
                                                    onLoad = {() => {
                                                    setTimeout(() => { 
                                                        setIsLoaded(true);
                                                        }, 300)
                                                    }}
                                                            
                                              alt=""
                                              style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s ease" }}
                                            />
                                          </Link>
                                      </div>
                                    </div>
                                {!isLoaded &&  (
                                                  <div className="skeleton nft_coll_Skeleton" 
                                                      style={{ 
                                                        position: "absolute", 
                                                        height:"16px",
                                                        width:"45px",
                                                        backgroundColor: "gray",
                                                        top: 440, left: 15, right: 0, 
                                                        bottom: 0, zIndex: 5,
                                                        borderRadius: "2px" }} />
                                               )} 
                               
                                {!isLoaded &&  (
                                            <div className="skeleton nft_coll_Skeleton" 
                                            style={{ 
                                              position: "absolute", 
                                              height:"18px",
                                              marginTop: "12px",
                                              width:"40px",
                                              backgroundColor: "gray",
                                              top: 450, left: 15, right: 0, 
                                              bottom: 0, zIndex: 5,
                                              borderRadius: "2px" }} />
                                              )} 
                          
                          
                                {!isLoaded ? <div className="nft__item_info" style={{ display: "none"}}></div>
                                              :<div className="nft__item_info">
                                                  <Link to="/item-details">
                                                    <h4>{nft.title}</h4>
                                                  </Link>
                                                  <div className="nft__item_price">{nft.price}</div>
                                                  <div className="nft__item_like">
                                                    <i className="fa fa-heart"></i>
                                                    <span>{nft.likes}</span>
                                                  </div>
                                               </div>}
                        </div>
                      </div>
        
     
    
  
   )                 
};

export default SliderNewItems;