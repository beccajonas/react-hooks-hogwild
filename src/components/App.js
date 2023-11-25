import React, {useState} from "react";
import Nav from "./Nav";
import Search from "./Search";
import Filter from "./Filter";
import CardContainer from "./CardContainer"
import hogs from "../porkers_data";

function App() {
	const [filter, setFilter] = useState("All")
	const [search, setSearch] = useState("")

	function handleFilter(option) {
		console.log(option);
		setFilter(option)
	}

	function handleSearch(searchTerm) {
		setSearch(searchTerm)
	}

	const filteredPigs = hogs.filter(hog => {
		const includesSearchTerm = hog.name.toLowerCase().includes(search.toLowerCase()) || hog.weight.toString().includes(search);
		if (filter === "All" ) {
			return includesSearchTerm
		} else if (filter === "Greased") {
			return hog.greased && includesSearchTerm
		} else {return !hog.greased && includesSearchTerm}
	})
	

	return (
		<div className="App">
			<Nav />
			<Search handleSearch={handleSearch}/>
			<Filter onFilter={handleFilter} />
			<CardContainer hogs={filteredPigs}/>
		</div>
	);
}

export default App;
