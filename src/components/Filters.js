import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: props.filters
    }
  }

  handleChange = (event) => {
    const newState = Object.assign({}, this.state, {filters: {type: event.target.value}});
    this.setState(newState, () => this.props.onChangeType(this.state.filters.type));
  }

  handleClick = () => {
    this.props.onFindPetsClick();
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.state.filters.type} onChange={this.handleChange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
