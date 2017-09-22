import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const list = this.props.pets.map((pet, index) => {
      const isAdopted = this.props.adoptedPets.includes(pet.id)
      return <Pet
        key={index}
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={isAdopted}
      />
    });
    return (
      <div className="ui cards">
        {list}
      </div>
    );
  }
}

export default PetBrowser;
