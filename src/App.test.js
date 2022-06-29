import { render, screen } from "@testing-library/react";
import App from "./App";
import Logo from "./components/logo";
import { shallow } from 'enzyme';
import SearchBar from './components/searchbar';

const resizeWindow = (x,y) => {
	window.innerWidth = x;
	window.innerHeight = y;
	window.dispatchEvent(new Event('resize'));
}

//describe("<Link />", () => {
	//it("1.contains correct passed prop", () => {}
//}


describe("Test web response to mobile view", () => {
	it('Check size of searchbar', () => {
		const searchComponent = shallow(<SearchBar/>);

		resizeWindow(414,736);
		expect(searchComponent.html()).toEqual('<div>380 x 308</div>');

	}
