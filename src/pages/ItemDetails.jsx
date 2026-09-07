import React, { useState, useEffect } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import axios from "axios";

const ItemDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState({});

  const {nftId} = useParams();
  console.log(nftId)

  const itemDetailNFT = async () => {
    if (!nftId) return;
    try{
       const response = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`)
    
       
        setData(response.data);
      
      }
    catch(error) {
      console.log(error, "Error Fetching")
    }
  }

  useEffect(() => {
    itemDetailNFT()
  }, [nftId])

const [img, setImg] = useState()

  useEffect(() => {
    
    const image = new Image();
    image.src = data.nftImage;
    
    image.onload = () => {

      setTimeout(() => {
        setImg(image);
      }, 1500);

    }






  })
  

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              { img ? (
                      <>
                        <div className="col-md-6 text-center">
                          <img
                            src={data.nftImage}
                            className="img-fluid img-rounded mb-sm-30 nft-image"
                            alt=""
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="item_info">
                            <h2>{data.title}</h2>

                            <div className="item_info_counts">
                              <div className="item_info_views">
                                <i className="fa fa-eye"></i>
                                {data.views}
                              </div>
                              <div className="item_info_like">
                                <i className="fa fa-heart"></i>
                                {data.likes}
                              </div>
                            </div>
                            <p>
                            {data.description}
                            </p>
                            <div className="d-flex flex-row">
                              <div className="mr40">
                                <h6>Owner</h6>
                                <div className="item_author">
                                  <div className="author_list_pp">
                                    <Link to="/author">
                                      <img className="lazy" src={data.ownerImage} alt="" />
                                      <i className="fa fa-check"></i>
                                    </Link>
                                  </div>
                                  <div className="author_list_info">
                                    <Link to="/author">{data.ownerName}</Link>
                                  </div>
                                </div>
                              </div>
                              <div></div>
                            </div>
                            <div className="de_tab tab_simple">
                              <div className="de_tab_content">
                                <h6>Creator</h6>
                                <div className="item_author">
                                  <div className="author_list_pp">
                                    <Link to="/author">
                                      <img className="lazy" src={data.creatorImage} alt="" />
                                      <i className="fa fa-check"></i>
                                    </Link>
                                  </div>
                                  <div className="author_list_info">
                                    <Link to="/author">{data.creatorName}</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="spacer-40"></div>
                              <h6>Price</h6>
                              <div className="nft-item-price">
                                <img src={EthImage} alt="" />
                                <span>{data.price}</span>
                              </div>
                            </div>
                        </div>
                    </div>
                    </> 
                  ) : (
                  
                  <>
                   <div  className="col-md-6 text-center" >
                        <div /*className="img-fluid img-rounded mb-sm-30 nft-image"*/
                            style={{ width: "100%",
                                    height: "500px",
                                    backgroundColor: "gray",
                            }}>
                        </div>
                    </div>
                       <div className="col-md-6">
                          <div className="item_info"
                          style={{
                            width: "200px",
                            height: "50px",
                            backgroundColor: "gray",
                            marginBottom: "24px",
                            
                            
                          }}>
                            <h2 style={{ marginLeft: "24px",}}></h2>

                            <div className="item_info_counts">
                              <div className="item_info_views"
                              style={{
                                width: "50px",
                                height: "30px",
                                backgroundColor: "gray",
                              }}>
                               
                              </div>
                              <div className="item_info_like"
                               style={{
                                width: "50px",
                                height: "30px",
                                backgroundColor: "gray",
                              }}>
                                
                              </div>
                            </div>
                          
                            
                            <p style={{
                                width: "350px",
                                height: "30px",
                                backgroundColor: "gray",
                              }}></p>
                            <p style={{
                                width: "350px",
                                height: "30px",
                                backgroundColor: "gray",
                              }}>
                              </p>
                            <p style={{
                                width: "350px",
                                height: "30px",
                                backgroundColor: "gray",
                              }}></p>
                            <div className="d-flex flex-row">
                              <div className="mr40">
                                <h6>Owner</h6>
                                <div className="item_author">
                                  <div className="author_list_pp"
                                  style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "gray",
                                borderRadius: "50px",
                              }}>
                                    
                                  </div>
                                  <div className="author_list_info"
                                  style={{
                                width: "50px",
                                height: "20px",
                                backgroundColor: "gray",
                                marginLeft: "75px",
                              }}>
                                   
                                  </div>
                                </div>
                              </div>
                              <div></div>
                            </div>
                            <div className="de_tab tab_simple">
                              <div className="de_tab_content"
                              >
                                <h6 style={{
                                  marginTop: "12px",
                                }}>
                                  Creator</h6>
                                <div className="item_author">
                                  <div className="author_list_pp"
                                      style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "gray",
                                borderRadius: "50px",
                               
                              }}>
                                  
                                  </div>
                                  <div className="author_list_info"
                                   style={{
                                width: "50px",
                                height: "20px",
                                backgroundColor: "gray",
                                marginLeft: "75px",
                               
                              }}>
                                    
                                  </div>
                                </div>
                              </div>
                              <div className="spacer-40"></div>
                              <h6>Price</h6>
                              <div className="nft-item-price"
                              style={{
                                width: "50px",
                                height: "20px",
                                backgroundColor: "gray",
                               
                               
                              }}>
                                
                              </div>
                            </div>
                        </div>
                    </div>
                  </>
              )}
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default ItemDetails;
