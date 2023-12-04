import React, { useState } from 'react'

 function Hog({image, name, specialty, weight, greased,  highestMedalAchieved, onHogClick }) {

   const [clicked, setClick] = useState(false)

    function onHogClick(){ 
        setClick((clicked)=> !clicked)
    }  

  return (
    <div className='"ui grid container"'>
     <div className='pigTile' key={name}  onClick={onHogClick}>
        <div>
          <h3>{name}</h3>
          <img className="pigImage " src={image} alt={name}/> 
        </div>
        
      { clicked && <div className='details'>
          <ul className='details'>
            <li>Specialty: {specialty}</li>
            <li>Weight: {weight}</li>
            <li>{greased  ? "Greased" : "Not greased"}</li>
            <li>Highest medal achieved :{highestMedalAchieved}</li>
          </ul> 
        </div>   }
     </div>
    </div> 
  )
}

export default Hog