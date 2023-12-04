import React from 'react';
import Hog from './Hog';
import NewHogForm from './NewHogForm';

const HogsList = ({hogs, onHogClick, isGreased, sort}) => {

  const displayHogs = hogs
    .filter((hog) => isGreased === hog.greased)
    .sort((hogA, hogB) => {
      switch (sort) {
        case "weight ascending":
          return hogA.weight > hogB.weight;
        case "weight descending":
          return hogA.weight < hogB.weight;

        case "name ascending":
          return hogA.name.localeCompare(hogB.name);
        case "name descending":
          return hogB.name.localeCompare(hogA.name) 
        default:
          return 0;
      }
    })
    .map(hog => <Hog key={hog.name} onHogClick={onHogClick} highestMedalAchieved={hog["highest medal achieved"]} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} image={hog.image} />)

  return (
    <div>
      {displayHogs}      
    </div>
  )
}

export default HogsList
