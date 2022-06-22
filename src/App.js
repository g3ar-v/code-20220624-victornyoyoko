import "./App.css";
import Fonts from "./components/fonts";
import Navbar from "./components/navbar";
import Title from "./components/title";
import SearchBar from "./components/searchbar";

function App() {
	return (
		<div className="App">
			<div className="main">
				<Fonts/>
				<Navbar/>
				<Title/>
				<SearchBar/>
			</div>
		</div>
	);
}

export default App;
