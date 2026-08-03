import React, { useState, useEffect } from "react";
import AuthorImage from "../../images/author_thumbnail.jpg";
import TopSellerInfo from "./TopSellerInfo.jsx";
import axios from "axios";

const TopSellers = () => {

  const [data, setData] = useState([])

  const topSellerInfo = async () => {
    try{
       const data = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers")
        setData(data.data);
        
    }
    catch(error){
      console.error("Error fetching:", error);
    }
  }

  useEffect(() => {
     topSellerInfo();
  },[] ) 
 

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {data.map((seller, id) => (
                <li key={id}>
                    <TopSellerInfo seller={seller} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
