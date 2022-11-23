import {useState} from "react";
import {useFoodsContext} from "../context/food";
import {getFoodType} from "../lib/helpers";
import ContainerMap from "../components/ContainerMap";

const Search= () => {
    const [searchValue,setSearchValue] = useState("");
    const [foodDetails,setFoodDetails] = useState(null);
    const {data} = useFoodsContext();

    const handleChange = (value) => {
    	setSearchValue(value);
    };

    const handleSubmit = (value) => {
    	const foodDetails = getFoodType(value,data);
    	setFoodDetails(foodDetails);
    	setSearchValue("");
    }
	return (
		<div className="container">
		    <h1 className="heading heading__primary">Check for food truck types available in San Francisco</h1>
		    <h3 className="heading heading__secondary">For test you can search for 950 HARRISON ST or 401 CALIFORNIA ST</h3>
		    <h4 className="heading heading__tertiary">Click on marker on a map to see details and please enter valid address</h4>
			<div className="search__box">
			 	<input 
			 	    className="search__input"
			 		type="text" 
			 		placeholder="Enter the address"
			 		value={searchValue}
			 		onChange={(e) => handleChange(e.target.value)}
			 	/>
			 	<button
			 		onClick={() => handleSubmit(searchValue)} 
			 		className="search__button">
			 		Search
			 	</button>
			 </div>
			 {foodDetails &&  <ContainerMap foods={foodDetails}/>}
		</div>
	);
};

export default Search;