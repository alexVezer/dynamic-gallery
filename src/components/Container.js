import React, {Component} from 'react';
// import Poza from './Poza';

class Container extends Component{ 
	render() {
		return (
		<div>
		{
			this.props.container.map((poz, i )=> {
				console.log(poz[i])
				return (
					 <div className='item'>
						
						<p className='desc'> {poz[i].desc} </p>
					</div> 
		
					);
			})
		}
		</div> 
		);
}
}

export default Container;