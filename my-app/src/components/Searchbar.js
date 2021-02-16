import React, {Component} from 'react';

export default class Searchbar extends Component {
  state = {
    query:''
  }
  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
    this.setState({query:''})
  }
  render (){
    const {query} = this.state;
    return (
      <header className="Searchbar">
        <form  onSubmit={this.handleSubmit}  className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input 
            className="SearchForm-input"
            onChange={this.handleChange}
            value = {query}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  }
};