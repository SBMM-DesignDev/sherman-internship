import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NFTCountdown from "../home/NFTCountdown.jsx";
import ExploreItemsFilter from "./ExploreItemsFilter.jsx";

const ExploreItems = () => {



const [data, setData] = useState([]);
const [loading, setLoading] = useState()
const [addItems, setAddItems] = useState(8);




const exploreAPI = async () => {
  try{
      setLoading(true);

    const response = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/explore")
   console.log(response.data)
    setData(response.data);

    setLoading(false);
  }
  catch(error){
    console.log(error, "Error Fecthing API")
    setLoading(false);
  }

};

useEffect(() => {
  exploreAPI();
}, [])




 /* useEffect(() => {
    
    const image = new Image();
    image.src = data.nftImage;
    
    image.onload = () => {

      setTimeout(() => {
        setImg(image);
      }, 300);

    }

 }, [data.nftImage])*/
  



  

  const addArrayItems = () => {
      setAddItems(prevCount => prevCount + 4);
  };
 
  
return (
    <>
      <div>
        <ExploreItemsFilter data={data} setData={setData} addItems={addItems} />
      </div>
     
          {loading ?  
            new Array(8).fill(0).map((_, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }} 
        >
          
          <div className="nft__item">
            <div className="author_list_pp">
           
                <div
                  className="skeleton-card"
                  style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#bcb9b9",
                  borderRadius: "50px",
                  }}>
                </div>
                <i className="fa fa-check"
                   data-aos="fade"
                   data-aos-once="true"
                   data-aos-anchor-placement="top-bottom">
                </i>
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
              <div className="nft__item_like skeleton-card">
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
           data.slice(0, addItems).map((item, index) => ( 
            
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }} 
        >

          <div className="nft__item">
            <div className="author_list_pp">
              <Link
                to={`/author/${item.authorId}`}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-aos="fade"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <img className="lazy" src={item.authorImage} alt="" 
                     data-aos="fade"
                     data-aos-once="true"
                     data-aos-anchor-placement="top-bottom"/>
                <i className="fa fa-check"
                   data-aos="fade"
                   data-aos-once="true"
                   data-aos-anchor-placement="top-bottom">
                </i>
              </Link>
            </div>
              {item.expiryDate &&
            <div className="de_countdown">
              < NFTCountdown nft={item}/>
            </div>
              }
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
                <img src={item.nftImage} className="lazy nft__item_preview" alt="" 
                      data-aos="fade"
                      data-aos-once="true"
                      data-aos-anchor-placement="top-bottom"/>
              </Link>
            </div>
            <div className="nft__item_info">
              <Link to="/item-details">
                <h4 data-aos="fade"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom">
                      {item.title}
                </h4>
              </Link>
              <div className="nft__item_price" 
                   data-aos="fade"
                   data-aos-once="true"
                   data-aos-anchor-placement="top-bottom">
                    {item.price} ETH
              </div>
              <div className="nft__item_like">
                <i className="fa fa-heart"
                   data-aos="fade"
                   data-aos-once="true"
                   data-aos-anchor-placement="top-bottom">
               </i>
                <span 
                    data-aos="fade"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom">
                      {item.likes}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="col-md-12 text-center">
        {addItems < data.length &&
        <Link to="" id="loadmore" 
              className="btn-main lead" 
              onClick={addArrayItems}
              data-aos="fade"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom">
          Load more
        </Link>
        }
      </div>
      
      
    
    </>
  );
};

export default ExploreItems;
