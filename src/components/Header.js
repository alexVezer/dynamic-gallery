import React from 'react';
import '../App.css';

const Header = (props) => {
	return (
		<h1 style={{fontSize: '54px',
  borderBottom: '2px solid',
  borderRight: '2px solid'}}>props</h1> 
		);
}

const StyleH = {
  fontSize: '54px',
  borderBottom: '2px solid',
  borderRight: '2px solid',
  width: '400px',
  textAlign: 'center',
  boxShadow: '4px 4px 5px',
  color:'red'
};

export default Header;