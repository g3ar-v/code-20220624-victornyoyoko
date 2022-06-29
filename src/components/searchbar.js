import searchIcon from "../assets/search.png";


const Searchbar = props => {

	const mobile = props.changeSearchBar;
	console.log(mobile)

	const style = {
		textBox: {
			display: "flex",
			position: "relative",
			top: mobile ? "5px":"15px",
			left: " 2px",
			height: "20px",
			width: "180px",
			borderStyle: "none"}
	}
	return (
		<div className="searchbar">
			<form className="textbox">
				<label style={{ position: "relative", top: " 9px", left: "15px"}} >
					CITY
					<input style={style.textBox} type="text" name="city" placeholder="Select your city"/>
				</label>
			</form>
			<form className="textbox">
				<label style={{ position: "relative", top: " 9px", left: "15px"}}>
					DATES
					<input style={style.textBox} type="text" name="dates" placeholder="Select your dates" />
				</label>
			</form>
			<form className="textbox">
				<label className="label" style={{  position: "relative", top: " 9px", left: "15px"}}>
					GUESTS
					<input style={style.textBox} type="text" name="guests" placeholder="Add guests"/>
				</label>
			</form>
			<button className="search-button"><img src={searchIcon} alt="search" style={{ position: "relative", top: "7px", left: "-5px"}}/>Search</button>
		</div>
	);
}

export default Searchbar;

