import {createContext,useState,useEffect,useContext} from "react";
import {getFilteredFoods} from "../lib/helpers";
const FoodsContext = createContext();

const FoodsProvider= ({children}) => {
	const [foods,setFoods] = useState();

	useEffect(() => {
		getFoods();
	}, [])

	const getFoods = async () => {
		try {
			const res = await fetch("https://data.sfgov.org/resource/rqzj-sfat.json");
			const data = await res.json();
			//const movies = getFilteredMovies(data);
			const foods = getFilteredFoods(data);
			setFoods(foods);
		} catch(err){
			console.log("Internal server error 500");
		}
		
	};

	return (
		<FoodsContext.Provider
			value={{data:foods}}
		>
			{children}
		</FoodsContext.Provider>
	);
};

const useFoodsContext = () => {
	const context = useContext(FoodsContext);
	if(!context){
		throw new Error("Movies context cannot be called from outside it's provider!!");
	}
	return context;
};

export {FoodsProvider,useFoodsContext};
