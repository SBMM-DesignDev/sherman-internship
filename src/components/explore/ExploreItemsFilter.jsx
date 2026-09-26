import React from 'react';

const ExploreItemsFilter = ( { data, setData } ) => {

        

        const exploreFilter = (filter) => {

            let sortedData = [...data];

            if (filter === "price_low_to_high") {
                sortedData.sort((a,b) => Number(a.price) - Number(b.price))
            }
             if (filter === "price_high_to_low") {
                sortedData.sort((a,b) => Number(b.price) - Number(a.price))
            }
             if (filter === "likes_high_to_low") {
                sortedData.sort((a,b) => Number(b.likes) - Number(a.likes))
            }
              setData(sortedData);
        };


    return(

        <>
            <select id="filter-items" defaultValue="" 
                    onChange={(event) => exploreFilter(event.target.value)}
                    data-aos="fade"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom">
                <option value="">Default</option>
                <option value="price_low_to_high">Price, Low to High</option>
                <option value="price_high_to_low">Price, High to Low</option>
                <option value="likes_high_to_low">Most liked</option>
            </select>
        </>
    )
}

export default ExploreItemsFilter;