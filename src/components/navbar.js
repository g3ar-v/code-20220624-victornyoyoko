import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import '../App.css';

const Navbar = () => {
	return (
		<div className="nav">
			<Logo/>
			<ul className="nav-item">
				<li><Link to="#">Explore</Link></li>
				<li><Link to="#">About Us</Link></li>
				<li><Link to="#">Cities</Link></li>
			</ul>
			<button className="call-button">Call</button>
		</div>

	);
}

export default Navbar;
