import React from 'react';

const Poza = ({link, desc}) => {
	console.log("Poza:" + desc)
	return (
		<div className='item'>
			<img alt = 'poze' src= {link}/>
			<p className='desc'> {desc} </p>
		</div>
		);
}

export default Poza;

// 

									

// <img alt = 'poze' src= {this.state.poz[i].link}/>

// key = {poz.id}
// 						link = {poz.link}
// 						desc = {poz.desc}