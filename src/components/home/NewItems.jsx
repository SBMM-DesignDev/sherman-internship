import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import axios from "axios";
import SliderNewItems from "./SliderNewItems.jsx";

const NewItems = () => {

  const [data, setData] = useState([]);

      const newItemsInfo = async() => {
        try{
        const response =  await axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems")
      
        setData(response.data)

          }
        catch(error) {
          console.log(error, "Error API")
        }
      }


      useEffect(() => {
         newItemsInfo();
      }, [])
     


  return (
    <section id="section-items" className="no-bottom">
       <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12"></div>
                  <div className="text-center">
                    <h2>New Items</h2>
                    <div className="small-border bg-color-2"></div>
                  </div>
                </div>
                 <SliderNewItems data={ data }/>
              </div>
      </div>
    </section>
  );
};

export default NewItems;
