import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import '../App.css';

const Navbar = () => {
	return (
		<div className="nav">
			<Logo name="header"/>
			<div className="nav-right">
				<ul className="nav-item">
					<li><Link style={{textDecoration: 'none', color: "#FFFFFF"}} to="/explore">Explore</Link></li>
					<li><Link style={{textDecoration: 'none', color: "#FFFFFF"}} to="/about">About Us</Link></li>
					<li><Link style={{textDecoration: 'none', color: "#FFFFFF"}} to="#">Cities</Link></li>
				</ul>
				<button className="call-button-light">Call</button>
			</div>
		</div>

	);
}

export default Navbar;
