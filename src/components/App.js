import React, { useState} from "react";
import Nav from "./Nav";
import HogsList from "./HogsList";
import Filter from "./Filter";
import NewHogForm from "./NewHogForm";

import hogs from "../porkers_data";
import { toHaveClass } from "@testing-library/jest-dom/dist/matchers";

function App() {
	const [isGreased, setGreased] = useState(true);

    function display(){
        setGreased((isGreased)=> !isGreased)
    }

	const [sort, setSort]= useState('')
	function updateSort(value){
		setSort(value)
	}
	return (
		<div className="App">
			<Nav/>
			<Filter isGreased={isGreased} filterGreased={display} sort={sort} updateSort={updateSort}/>
			<NewHogForm/>
			<HogsList hogs={hogs} sort={sort} isGreased={isGreased}/>
		</div>
	);
}

export default App;
