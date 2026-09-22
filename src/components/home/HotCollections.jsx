import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from 'axios'
import SliderHotCollections from "./SliderHotCollections";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HotCollections = () => {

  useEffect(() => {
          setTimeout(() => {
             AOS.init({
            duration: "1000"
          });
          },300)
         
        },[])


  const [data, setData] = useState([])

   const hotCollectionsInfo = async () => {

        try{
        const response = await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections")
         setData(response.data);
         
        
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
              <h2 data-aos="fade"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-bottom">
                    Hot Collections
              </h2>
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
