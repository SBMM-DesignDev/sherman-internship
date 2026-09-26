import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';



const SliderHotCollections = ( { data } ) => {
    
    const isLoaded = false
    
    
       useEffect(() => {
              let timer;
    
               if(isLoaded) {
               timer = setTimeout(() => {
                   AOS.init({
                  duration: "1000"});
                },300)
    
                return () => clearTimeout(timer)
    
               }
            },[isLoaded]);  


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
               const timeoutRef = useRef(null);
                     
               
                     useEffect(() => {
                       return () => {
                         if(timeoutRef.current) {
                           clearTimeout(timeoutRef.current)
                         }
                       }
                     }, []) 
           
                     const imageOnLoad = () => {
                       timeoutRef.current = setTimeout(() => {
                         setIsLoaded(true);
                       }, 300)
                     };







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
                          <div className="nft_wrap" 
                          style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s ease" }}
                           >
                              <Link to={`/item-details/${nft.nftId}`}>
                                  <img src={nft.nftImage} 
                                        className="lazy img-fluid" 
                                        
                                        onLoad ={imageOnLoad}
                                        alt="" 
                                        data-aos="fade"
                                        data-aos-once="true"
                                        data-aos-anchor-placement="top-bottom"
                                  />
                              </Link>
                          </div>
                         {!isLoaded ? <div className="nft_coll_pp nft_coll_info" style={{display: "none"}} ></div> 
                         :
                         <div className="nft_coll_pp">
                              <Link to={`/author/${nft.authorId}`}>
                                  <img className="lazy pp-coll" src={nft.authorImage} alt="" />
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