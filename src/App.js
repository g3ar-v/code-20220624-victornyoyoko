import "./App.css";
import React, { useRef, useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import Main from "./pages/main";
import Explore from "./pages/explore";
import AboutUs from "./pages/about";
import { ParentsizeSVG } from '@cutting/svg';
import { HashLink as Link} from "react-router-hash-link";

//const ref = useRef<HTMLDivElement>(null);



function App() {

	const [index,setIndex] = useState(0);
	return (
		<div className="App">
			<Link smooth to="/" style={{textDecoration: "none"}}>
				<Main/>
			</Link>
			<Link smooth to="/#explore" style={{textDecoration: "none"}}>
				<Explore/>
			</Link>
			<Link smooth to="/#about" style={{textDecoration: "none"}}>
				<AboutUs/>
			</Link>
		</div>
	);
}

export default App;
