import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from 'axios'
import SliderHotCollections from "./SliderHotCollections";

const HotCollections = () => {
  const [data, setData] = useState([])

   const hotCollectionsInfo = async () => {

        try{
        const response = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections")
         setData(response.data);
         console.log(response)
         console.log(response.data)
        }
        catch (error) {
          console.error("Error fetching:", error);
        }
   };

   useEffect(() => {
   
    hotCollectionsInfo();
   
  }, [])

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          
            <div>
                <SliderHotCollections data={data}/>
            </div>
        
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
