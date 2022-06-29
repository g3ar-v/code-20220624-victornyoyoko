import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import Logo from './logo';
import '../App.css';

const footer = () => {
	return (
		<div className="footer">
			<div className="footer-Logo">
				<Logo name="footer"/>
				<p style={{
					width: "159px",
					height: "43px",
					left: "98px",
					top: "620px",
					fontFamily: "'Ubuntu'",
					fontStyle: "normal",
					fontWeight: "300",
					fontSize: "14px",
					lineHeight: "132%"
				}}>&copy; 2021 Company Name All rights reserved</p>
			</div>
			<div className="footer-right">
				<ul className="footer-item">
					<li><Link style={{textDecoration: 'none', color: "#000000"}} to={"/#explore"}>Explore</Link></li>
					<li><Link  style={{textDecoration: 'none', color: "#000000"}} to={"/#about"}>About Us</Link></li>
					<li><a style={{textDecoration: 'none', color: "#000000"}} href="/#main">Cities</a></li>
				</ul>
				<button className="call-button-dark">Call</button>
			</div>
		</div>

	);
}

export default footer;
