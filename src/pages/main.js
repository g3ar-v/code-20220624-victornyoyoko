import React, { useState, useEffect } from 'react';
import "../App.css";
import Fonts from "../components/fonts";
import Navbar from "../components/navbar";
import Title from "../components/title";
import SearchBar from "../components/searchbar";
import slidedownBtn from "../assets/slidedown.png";
import Wave from "../assets/wave.svg";

			//<svg width="1152" height="51" viewBox="0 0 1152 51" fill="none" xmlns="http://www.w3.org/2000/svg">
				//<path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.8721L24 18.8345C48 17.7969 96 15.7217 144 19.8721C192 24.0225 240 34.3985 288 35.4361C336 36.4736 384 28.1729 432 29.2105C480 30.2481 528 40.624 576 43.7368C624 46.8496 672 42.6992 720 35.4361C768 28.1729 816 17.7969 864 10.5337C912 3.27057 960 -0.879817 1008 0.157779C1056 1.19538 1104 7.42095 1128 10.5337L1152 13.6465V51H1128C1104 51 1056 51 1008 51C960 51 912 51 864 51C816 51 768 51 720 51C672 51 624 51 576 51C528 51 480 51 432 51C384 51 336 51 288 51C240 51 192 51 144 51C96 51 48 51 24 51H0V19.8721Z" fill="white"/>
			//</svg>

//<img src={Wave} alt="wave" style={{ width: "auto",transform: "scale(1.4)",margin: "auto"}}/>


const Main = () => {
	const [width, setWindowWidth] = useState(0);

	const updateDimensions = () => {
		const width = window.innerWidth;
		setWindowWidth(width);
	}

	useEffect(() => {
		updateDimensions();
		window.addEventListener("resize", updateDimensions);

		return() =>
			window.removeEventListener("resize", updateDimensions);
	}, [])

	const responsive = {
		changeSearchBar: width < 490
	}

	return (
		<div id="main"
		>
			<Fonts />
			<Navbar />
			<Title />
			<SearchBar  changeSearchBar={responsive.changeSearchBar}/>
			<button style={{ display: "flex", position: "relative", top: "40px", backgroundColor: "transparent",  border: "2px solid transparent", margin: "auto"}}> <img src={slidedownBtn} alt="slidedownBtn"/></button>
			<div className="wave-container">
		</div>
		</div>
	);
}
export default Main;
