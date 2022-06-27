import "./App.css";
import React, { useRef, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Fonts from "./components/fonts";
import Navbar from "./components/navbar";
import Title from "./components/title";
import SearchBar from "./components/searchbar";
import SwipeableViews from "react-swipeable-views";
import kingSize from "./assets/kingSize.png";
import penthouse from "./assets/penthouse.png";
import mainscreenImg from "./assets/mainscreen.png";
import Footer from "./components/footer";
import chapter1 from "./assets/chapter1.png";
import chapter2 from "./assets/chapter2.png";
import chapter3Top from "./assets/chapter3-top.png";
import chapter3 from "./assets/chapter3.png";
import chapter4Top from "./assets/chapter4-top.png";
import chapter4 from "./assets/chapter4.png";
import slidedownBtn from "./assets/slidedown.png";
import Wave from "./assets/wave.svg";
import { ParentsizeSVG } from '@cutting/svg';

const ref = useRef<HTMLDivElement>(null);

const handleSlide = () => {
}

function App() {

	const [index,setIndex] = useState(0);
	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<SwipeableViews>
						<div
							className="main"
						>
							<Fonts />
							<Navbar />
							<Title />
							<SearchBar />
							<button style={{ display: "flex", position: "relative", top: "40px", backgroundColor: "transparent",  border: "2px solid transparent", margin: "auto"}}> <img src={slidedownBtn} alt="slidedownBtn"/></button>
							<img src={Wave} alt="wave" style={{ width: "auto",transform: "scale(1.4)",margin: "auto"}}/>
							<div className="wave-container">
							</div>
						</div>
					</SwipeableViews>
				</Route>
				<Route path="/explore">
					<div className="Explore">
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
									<p style={{ width: "300px"}} >Room with one king-size bed</p>
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
				</Route>
				<Route>
					<div className="about-us">
						<h2
							style={{
								fontFamily: "'Exo 2'",
								fontStyle: "normal",
								fontWeight: 700,
								fontSize: "64px",
								lineHeight: "110%",
								color: "#000000",
								paddingLeft: "60px"
							}}
						>
							About Us
						</h2>
						<h3
							style={{
								fontFamily: "'Ubuntu'",
								fontStyle: "normal",
								fontWeight: 400,
								fontSize: "18px",
								lineHeight: "110%",
								paddingLeft: "60px"}}
						>Allow us to tell you a short story...</h3>
						<div className="about-images">
							<div style={{ display: "flex", flexDirection: "column"}}>
								<img className="column" src={chapter1} alt="chapter1" style={{width: "400px", height: "266.99px"}}/>
								<div className="caption-container">
									<h3 style={{ width: "106px",height: "26px",fontFamily: "'Ubuntu'",
										fontStyle: "normal",
										fontWeight: 700,
										fontSize: "24px",
										lineHeight: "10%"
									}}>Chapter I</h3>
									<p className="caption" style={{margin: 0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
								</div>
							</div>
							<div style={{ display: "flex", flexDirection: "column"}}>
								<img className="column" src={chapter2} alt="chapter2" style={{ borderRadius: "15px", width: "500px", height: "333.74px"}}/>
								<div className="caption-container">
									<h3 style={{ width: "300px", fontFamily: "'Ubuntu'",
										fontStyle: "normal",
										fontWeight: 700,
										fontSize: "24px",
										lineHeight: "1%"}}>Chapter II</h3>
									<p className="caption" style={{margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
								</div>
							</div>
						</div>
						<div className="bottomimages">
							<img src={chapter3Top} alt="chapter3top"/>
							<img src={chapter4Top} alt="chapter4top"/>
						</div>
						<div className="fourth-screen">
							<div style={{ display: "flex", flexDirection: "column"}}>
								<img className="column" src={chapter3} alt="chapter3" style={{ borderRadius: "15px", width: "400px", height: "502.58px"}}/>
								<div className="caption-container">
									<h3 style={{ width: "300px", fontFamily: "'Ubuntu'",
										fontStyle: "normal",
										fontWeight: 700,
										fontSize: "24px",
										lineHeight: "1%"}}>Chapter III</h3>
									<p className="caption" style={{margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
								</div>
							</div>


							<div style={{ display: "flex", flexDirection: "column"}}>
								<img className="column" src={chapter4} alt="chapter4" style={{ borderRadius: "15px", width: "500px", height: "500px"}}/>
								<div className="caption-container">
									<h3 style={{ width: "300px", fontFamily: "'Ubuntu'",
										fontStyle: "normal",
										fontWeight: 700,
										fontSize: "24px",
										lineHeight: "1%"}}>Chapter IV</h3>
									<p className="caption" style={{margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
								</div>
							</div>
						</div>
						<Footer />
					</div>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
