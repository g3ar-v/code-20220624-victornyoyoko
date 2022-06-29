import "../App.css";
import React from "react";
import kingSize from "../assets/kingSize.png";
import penthouse from "../assets/penthouse.png";
//import mainscreenImg from "../assets/mainscreen.png";

const Explore = () => {
	return (
		<div id="explore">
			<h2
				style={{
					fontFamily: "'Exo 2'",
					fontStyle: "normal",
					fontWeight: 700,
					fontSize: "64px",
					//lineHeight: "110%",
					color: "#000000",
					paddingLeft: "64px"
				}}
			>
				Explore
			</h2>
			<h3
				style={{
					width: "300px",
					height: "40px",
					left: "69px",
					top: "174px",
					fontFamily: "'Ubuntu'",
					fontStyle: "normal",
					fontWeight: 400,
					fontSize: "18px",
					lineHeight: "110%",
					display: "flex",
					alignItems: "center",
					paddingLeft: "64px",
					paddingBottom: "48px",
					color: "#000000"
				}}
			>From one-guest rooms to penthouses with pools and gardens</h3>
			<div className="secondscreen-images">
				<div style={{ display: "flex", flexDirection: "column"}}>
					<img src={kingSize} alt="kingSize" style={{ width: "500px", height: "300px"}} />
					<div className="kingsize-info">
						<p style={{ width: "300px", textDecoration: "none"}} >Room with one king-size bed</p>
						<p className="image-data" style={{ position:"relative", top: "40px", left: "-180px"}}>35$</p>
						<p className="image-data" style={{ position:"relative", top: "40px", left: "-140px"}}>28&#13217;</p>
						<button className="book-button" style={{ position:"relative", top: "40px", left: "-40px", fontFamily: "'Ubuntu'", fontStyle: "normal"}}>Book!</button>
					</div>
				</div>
				<div style={{ display: "flex", flexDirection: "column", }}>
					<img src={penthouse} alt="penthouse"  style={{ width: "500px", height: "300px"}}/>
					<div className="penthouse-info">
						<p style={{ width: "250px"}}>penthouse for 8 person</p>
						<p className="image-data" style={{ position:"relative", top: "40px", left: "-180px"}}>2039$</p>
						<p className="image-data" style={{ position:"relative", top: "40px", left: "-140px"}}>438&#13217;</p>
						<button className="book-button" style={{ position:"relative", top: "40px", left: "-40px", fontFamily: "'Ubuntu'", fontStyle: "normal"}}>Book!</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Explore;
