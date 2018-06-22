import React, { Component } from 'react';
import Filter from './Index';

let roommate = [
	{ name: 'Java'},
	{ name: 'C/C++'},
	{ name: 'Python'},
	{ name: 'C#'},
	{ name: 'PHP'},
	{ name: 'JavaScript'},
	{ name: 'Ruby'},
	{ name: 'React'},
	{ name: 'Manoj'},
	{ name: 'Sharma'},
	{ name: 'React'},
	{ name: 'Angular 2'},
];

class Data extends Component {
	render(){
		return(
				<div>
					<Filter matename={roommate} />
				</div>
			)
	}
}

 export default Data;