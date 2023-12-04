import React from 'react'
import hogs from '../porkers_data'

const Filter = ({isGreased, filterGreased, updateSort}) => {

  function handleClick(){
    filterGreased()
  }

  function handleSortChange(e){
    updateSort(e.target.value)
  }
  return (
    <>
      <div className="filter">
        <h5>Filter by..</h5>
        <button onClick={handleClick}>{isGreased ? "Not greased": "Greased"}</button>
      </div>
      <div className='sort'>
        <h5>Sort by..</h5>
        <select onChange={handleSortChange}>
          <option>Default</option>
          <option value="weight ascending">Weight: low to high</option>
          <option value="weight descending">Weight: high to low</option>
          <option value="name ascending">Name: A to Z</option>
          <option value="name descending">Name: Z to A</option>
        </select>
      </div>
    </>

  )
}

export default Filter
