import React from 'react';

const Searchbar = () => {
	return (
		<div className="searchbar">
			<form className="textbox">
				<label >
					City
					<input type="text" name="city" />
				</label>
				<label >
					Dates
					<input type="text" name="city" />
				</label>
				<label >
					Guests
					<input type="text" name="city" />
				</label>
			</form>
			<button className="searchbox">Search</button>
		</div>
	);
}

export default Searchbar;

