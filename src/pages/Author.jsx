import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Author = () => {
  
  const [data, setData] = useState({});
   const [addFollower, setAddFollower] = useState(0)
    const [follow, setFollow] = useState(false);
    const [loading, setLoading] = useState(true)

  const {authorId, creatorId, ownerId} = useParams();
   



useEffect(() => {
  const authorIdInfo = async() => {
      try{
        setLoading(true);

        const response = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId || ownerId || creatorId}`)
       console.log(response.data);
        setData(response.data);
        setAddFollower(response.data.followers || 0);

        setLoading(false);
        
      }
      catch(error){
        console.log(error, "Error Fetching")
      }
}

authorIdInfo();

},[authorId, ownerId, creatorId])
  

    const userFollow = (event) => {
       event.preventDefault();

        if(follow) {
        setAddFollower((prev) => prev - 1)
        setFollow(false)
           
      }
      else {
        
        setAddFollower((prev) => prev + 1)
        setFollow(true)
      }
     
    }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">

                    { loading ? (
                      <>
                      <div className="profile_avatar">
                        <div  className="skeleton-card"
                              style={{ 
                              width: "150px",
                              height: "150px",
                              backgroundColor: "#bcb9b9",
                              borderRadius: "50%",
                        }}></div>

                        <i className="fa fa-check"></i>
                          <div className="profile_name" 
                          style={{ display: "flex",
                                  flexDirection: "column",
                                  alignItems: "left",
                                  justifyContent: "center",
                                  
                                  
                          }}>
                            <div className="skeleton-card"
                            style={{ 
                              width: "100px",
                              height: "20px",
                              borderRadius: "3px",
                              backgroundColor:  "#bcb9b9",
                              
                            }}> </div>
                             
                            <div className="skeleton-card"
                            style={{ 
                              width: "150px",
                              height: "20px",
                              borderRadius: "3px",
                              backgroundColor:  "#bcb9b9",
                              marginTop: "8px",
                               marginLeft: "50px",
                            }}>
                            </div>
                            <div className="skeleton-card"
                            style={{ 
                              width: "125px",
                              height: "20px",
                              borderRadius: "3px",
                              backgroundColor:  "#bcb9b9",
                              marginTop: "8px",
                              marginLeft: "24px",
                               
                            }}>
                            </div>
                             
                       
                      </div>
                    </div>
                      
                      </>
                    ) : (
                      <>
                    <div className="profile_avatar">
                      <img src={data.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {data.authorName}
                          <span className="profile_username">{data.tag}</span>
                          <span id="wallet" className="profile_wallet">
                                {data.address}                          
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                    </>
                  )}
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{addFollower} Followers</div>
                      <Link to="#" className="btn-main" onClick={userFollow}>
                        { follow ? "Unfollow" : "Follow"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                   <div className="de_tab_content">
                      <div className="tab-1">
                        <div className="row">
                          { loading ?
                                new Array(8).fill(0).map((_, index) => (
                                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                              <div className="nft__item">
                                <div className="author_list_pp">
                                  
                                     <div className="skeleton-card"
                                        style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#bcb9b9",
                                        borderRadius: "50px",
                                        }}>
                                    </div>
                                    <i className="fa fa-check"></i>
                                 
                                </div>
                                <div className="nft__item_wrap">
                                  <div className="nft__item_extra">
                                    <div className="nft__item_buttons">
                                      <button>Buy Now</button>
                                      <div className="nft__item_share">
                                        <h4>Share</h4>
                                        <a href="/" target="_blank" rel="noreferrer">
                                          <i className="fa fa-facebook fa-lg"></i>
                                        </a>
                                        <a href="/" target="_blank" rel="noreferrer">
                                          <i className="fa fa-twitter fa-lg"></i>
                                        </a>
                                        <a href="/">
                                          <i className="fa fa-envelope fa-lg"></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="skeleton-card"
                                      style={{
                                      width: "185px",
                                      height: "200px",
                                      backgroundColor: "#bcb9b9",
                                      borderRadius: "5px",
                                      
                                      }}>
                                    </div>
                                </div>
                                <div className="nft__item_info">
                                  <div className="skeleton_explore skeleton-card"
                                      style={{
                                        width: "100px",
                                        height: "18px",
                                        backgroundColor: "#bcb9b9",
                                        borderRadius: "3px"
                                        }}>

                                  </div>
                                  <div className="nft__item_price skeleton_explore skeleton-card" 
                                      style={{
                                        width: "100px",
                                        height: "18px",
                                        backgroundColor: "#bcb9b9",
                                        borderRadius: "3px",
                                        marginTop: "3px",
                                        }}>
                                  </div>
                                  <div className="nft__item_like">
                                    <i className="fa fa-heart"
                                      data-aos="fade"
                                      data-aos-once="true"
                                      data-aos-anchor-placement="top-bottom">
                                  </i>
                                  
                                  </div>
                                  </div>
                                </div>
                              </div>
                          )) :
                          
                            data.nftCollection?.map((item, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                              <div className="nft__item">
                                <div className="author_list_pp">
                                  <Link to="">
                                    <img className="lazy" src={data.authorImage} alt="" />
                                    <i className="fa fa-check"></i>
                                  </Link>
                                </div>
                                <div className="nft__item_wrap">
                                  <div className="nft__item_extra">
                                    <div className="nft__item_buttons">
                                      <button>Buy Now</button>
                                      <div className="nft__item_share">
                                        <h4>Share</h4>
                                        <a href="/" target="_blank" rel="noreferrer">
                                          <i className="fa fa-facebook fa-lg"></i>
                                        </a>
                                        <a href="/" target="_blank" rel="noreferrer">
                                          <i className="fa fa-twitter fa-lg"></i>
                                        </a>
                                        <a href="/">
                                          <i className="fa fa-envelope fa-lg"></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <Link to={`/item-details/${item.nftId}`}>
                                    <img
                                      src={item.nftImage}
                                      className="lazy nft__item_preview"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="nft__item_info">
                                  <Link to="/item-details">
                                    <h4>{item.title}</h4>
                                  </Link>
                                  <div className="nft__item_price">{item.price}</div>
                                  <div className="nft__item_like">
                                    <i className="fa fa-heart">{item.likes}</i>
                                    <span></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
