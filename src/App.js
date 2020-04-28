import React, { Component } from 'react'; // Destructuring here.
import { CardList }  from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// function App() {
//   return (
    
//   );
// }

class App extends Component {
  constructor() { 
    super();
    this.state = {
      monsters: [],
      serachField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({serachField: e.target.value})
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  };
  render(){
    const {monsters , serachField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(serachField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
           placeholder="Search Monsters"
           handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
