import React from 'react';
import "../App.css";
import chapter1 from "../assets/chapter1.png";
import chapter2 from "../assets/chapter2.png";
import chapter3Top from "../assets/chapter3-top.png";
import chapter3 from "../assets/chapter3.png";
import chapter4Top from "../assets/chapter4-top.png";
import chapter4 from "../assets/chapter4.png";
import Footer from "../components/footer";

const AboutUs = () => {
	return (
		<div id="about">
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

	);
}

export default AboutUs;
