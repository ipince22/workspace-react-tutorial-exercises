import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const socialnet = ["Link to google.com", "Link to facebook.com", "Link to amazon.com"];
const navlinkItems = socialnet.map((social, i) => {
	return (
		<li className="nav-item" key={i}>
			<a className="nav-link" href="#">
				{social}
			</a>
		</li>
	);
});

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));

/*
const animalsInHTML = animals.map((singleAnimal, i) => {
	return <li key={i}>{singleAnimal}</li>;
});
*/
