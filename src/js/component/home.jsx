import React from "react";
import Card from "./Card";
import SimpleCounter from "./SimpleCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div >
		<Card/>
		
		 <SimpleCounter/>	
		 </div>);
};


export default Home;
