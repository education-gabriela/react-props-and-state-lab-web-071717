import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import {getAll, getByType} from "../data/pets.js"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      },
      adoptedPets: []
    };
  }

  componentDidMount() {
    this.setState({pets: getAll()});
  }

  handleAdoption = (petId) => {
    this.setState({adoptedPets: [...this.state.adoptedPets, petId]});
    // console.log(petId)
  }

  handleChangeType = (type) => {
    const newState = Object.assign({}, this.state, {
      filters: {
        type: type
      }
    });

    this.setState(newState)
  }

  findByType = () => {
    const pets = this.state.filters.type === "all" ? getAll() : getByType(this.state.filters.type);
    this.setState({pets: pets});
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onFindPetsClick={this.findByType} onChangeType={this.handleChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
