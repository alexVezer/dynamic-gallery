import React, {Component} from 'react';
import Tachyons from 'tachyons';
import Header from './components/Header.js';
import Container from './components/Container.js';
import Poza from './components/Poza.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs:[
        {
     id:1,     
    link:'https://static.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg',
    desc:'Horse'
  },
  {
    id:2,
    link:'https://static.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg',
    desc:'Elephant cub'
  },
  {
    id:3,
    link:'https://static.pexels.com/photos/213399/pexels-photo-213399.jpeg',
    desc:'Fishes'
  }
      ]

    }
  }

// componentDidMount() {
//   fetch('./poze.js')
//     .then(response=> response.json())
//     .then(poze => this.setState({imgs:poze}))
// }

render() {
  console.log(this.state.imgs);
  return (

    <div className="tc">
      <Header props="Gallery"/>

      <div className="Container" > {
        this.state.imgs.map((poz) => (
            <Poza link={poz.link} desc={poz.desc} /> 
                    ))
      }
      }
      </div>
    </div>
  );
}
}

export default App;
