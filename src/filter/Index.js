import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button  } from 'react-bootstrap';

class filterdata extends Component{

	constructor(){
		super();
		this.state = {
			dataterm:'',
		}
	}

	render(){

		let roommatelist = 	this.props.matename;
		let termlist = this.state.dataterm;

		roommatelist = roommatelist.filter(function( dl){
			return dl.name.toLowerCase().match(termlist);
		});

		return(
				<div className="">					
					<Grid>
						<Row className="show-grid"><br />
							<Col xs={12} md={12}>

							<FormControl width="100%"
								 onChange={ evalue => this.setState({ dataterm : evalue.target.value})} 
								 type="text" 
								 placeholder="Search the data" />

								<ul className="list-group text-left">
									{
										roommatelist.map(function(fix){
										return <li className="list-item" id={fix.name}>
											{fix.name}
											</li>
										})
									}									
								</ul>

							</Col>
						</Row>
					</Grid>
				</div>
			)
	}
}

export default filterdata;