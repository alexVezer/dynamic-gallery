import React from 'react';

const Poza = ({link, desc}) => {
	return (
		<div className='item'>
			<img alt = 'poze' src= {link}/>
			<p className='desc'> {desc} </p>
		</div>
		);
}

export default Poza;

// link={this.state.poz.link} desc={this.state.poz.link} /> 

									

// <img alt = 'poze' src= {this.state.poz[i].link}/>

// key = {poz.id}
// 						link = {poz.link}
// 						desc = {poz.desc}