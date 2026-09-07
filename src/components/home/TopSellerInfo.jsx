import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";



const TopSellerInfo = ( { seller } ) => {

   const [img, setImg] = useState();
   const mountedRef = useRef(true);

  useEffect(() => {
   
    

    const image = new Image();
   image.src = seller.authorImage;
  
   image.onload = () => {
   
    setTimeout(() =>{
       if (mountedRef.current) {
       setImg(image)
      }
    }, 300);
       
   };

   return() => {
    mountedRef.current = false;
   }
   

  },[seller.authorImage])


    return(   
    <>
             { img ? (
              <>
                <div className="author_list_pp">
                
                    <Link to={`/author/${seller.authorId}`}>
                      <img
                        className="lazy pp-author"
                        src={img.src}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${seller.authorId}`}>{seller.authorName}</Link>
                    <span>{seller.price} ETH</span>
                  </div> 
                  </>)
                  :
                  (
                    <>
                    <div  
                      style={{                   
                      width: "100%",
                      height: "65px",
                      display: "flex",
                     
                     }}>
                      <div style={{
                         display: "flex",
                          flexDirection: "column",
                          width: "35%",
                         
                          
                      }}>
                            <div  className="lazy pp-author"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50px",
                              backgroundColor: "gray",
                              marginLeft: "8px",
                              marginTop: "8px",
                            
                            
                              
                              }}>
                            </div>
                      </div> 

                      <div style={{
                        display: "flex",
                          flexDirection: "column",
                          width: "65%",
                          
                      }}>
                                <div 
                              style={{                            
                                width: "95px",
                                height: "16px",
                                backgroundColor: "gray",
                                marginTop: "16px",
                                borderRadius: "2px",
                              
                                
                              }}
                              ></div>
                            
                              <div 
                              style={{                                
                                  width: "14px",
                                  height: "16px",
                                  backgroundColor: "gray",
                                  marginTop: "4px",
                                  borderRadius: "2px",
                                  
                                  
                                }}>
                                  
                              </div>
                      </div>
                    </div>
                    </>
                  )
                  }
               </>
          );

        
};

export default TopSellerInfo;