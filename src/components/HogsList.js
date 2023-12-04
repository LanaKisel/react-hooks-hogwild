import React from 'react';
import Hog from './Hog';
import NewHogForm from './NewHogForm';

const HogsList = ({hogs, onHogClick, isGreased, sort}) => {

  const displayHogs = hogs
    .filter((hog) => isGreased === hog.greased)
    .sort((hogA, hogB) => {
      switch (sort) {
        case "weight ascending":
          if (hogA.weight>hogB.weight) 
          { return 1} else if 
          (hogA.weight<hogB.weight) 
          { return -2} else if 
          (hogA.weight=hogB.weight) 
          {return 0}
        case "weight descending":
          if (hogB.weight>hogA.weight) 
          { return 1} else if 
          (hogB.weight<hogA.weight) 
          { return -2} else if 
          (hogB.weight=hogA.weight) 
          {return 0}         
        case "name ascending":
          return hogA.name.localeCompare(hogB.name);
        case "name descending":
          return hogB.name.localeCompare(hogA.name) 
        default:
          return 0;
      }
    })
    .map(hog => <Hog className="ui grid container" key={hog.name} onHogClick={onHogClick} highestMedalAchieved={hog["highest medal achieved"]} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} image={hog.image} />)

  return (
    <div>
      {displayHogs}      
    </div>
  )
}

export default HogsList
