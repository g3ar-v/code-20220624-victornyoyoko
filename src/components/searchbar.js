import searchIcon from "../assets/search.png";

const Searchbar = () => {
	return (
		<div className="searchbar">
			<form className="textbox">
				<label style={{ position: "relative", top: " 9px", left: "15px"}} >
					CITY
					<input style={{
						display: "flex",
						position: "relative",
						top: "15px",
						left: " 2px",
						height: "20px",
						width: "180px",
						borderStyle: "none"
						}} type="text" name="city" placeholder="Select your city"/>
				</label>
			</form>
			<form className="textbox">
				<label style={{  position: "relative", top: " 9px", left: "15px"}}>
					DATES
					<input style={{
						display: "flex",
						position: "relative",
						top: "15px",
						left: " 2px",
						height: "20px",
						width: "180px",
idth: "180px",
eight: "20px",
						borderStyle: "none"
						}} type="text" name="dates" placeholder="Select your dates" />
				</label>
			</form>
			<form className="textbox">
				<label className="label" style={{  position: "relative", top: " 9px", left: "15px"}}>
					GUESTS
					<input style={{
						display: "flex",
						position: "relative",
						top: "15px",
						left: " 2px",
						height: "20px",
						width: "180px",
						borderStyle: "none"
						}}  type="text" name="guests" placeholder="Add guests"/>
				</label>
			</form>
			<button className="search-button"><img src={searchIcon} alt="search" style={{ position: "relative", top: "7px", left: "-5px"}}/>Search</button>
		</div>
	);
}

export default Searchbar;

