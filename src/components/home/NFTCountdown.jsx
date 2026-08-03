import React, { useEffect, useState } from 'react';

const NFTCountdown = ( {nft} ) => {

    
    const [timeLeft, setTimeLeft] = useState({hours: 0, minutes: 0, seconds: 0})

    useEffect(() => {

            if(!nft.expiryDate) return


            let animationID;

            const updateTimer = () => {
               
            const startTime = Date.now();
            

            let expirationDate = nft.expiryDate - startTime;
           

            if(expirationDate <= 0) {
                setTimeLeft("EXPIRED");
                return timeLeft;
            }

            const seconds = Math.floor((expirationDate / 1000 ) % 60)
            const minutes = Math.floor((expirationDate / 1000 / 60 ) % 60)
            const hours = Math.floor((expirationDate / 1000 / 60/ 60 ))
 
            setTimeLeft({ hours, minutes, seconds})

           animationID = requestAnimationFrame(updateTimer);

           
    }
         

           animationID = requestAnimationFrame(updateTimer); 

            return () => cancelAnimationFrame(animationID);
    },[nft.expiryDate] )
    
  

 

    return(
    <div id="timer" >
  
    
      <span className="timer__hours">{timeLeft.hours}h </span>
      
      <span className="timer__minutes">{timeLeft.minutes}m </span>
      
      <span className="timer__seconds">{timeLeft.seconds}s  </span>
    </div>
    )

   


}

export default NFTCountdown;