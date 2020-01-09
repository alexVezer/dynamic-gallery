import React, {Component} from 'react';
import Tachyons from 'tachyons';
import Header from './components/Header.js';
import Poza from './components/Poza.js';
import poze from './poze.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { poze }
  }
  

render() {
  console.log(this.state.poze);
  return (

    <div className="tc">
      <Header title="Gallery"/>

      <div className="container" > {
        this.state.poze.map((poz) => (
            <Poza link={poz.link} desc={poz.desc} /> 
                    ))
      }
      
      </div>
    </div>
  );
}
}

export default App;
