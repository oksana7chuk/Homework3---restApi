import React, {Component} from 'react';
import styles from './SearchBar.module.css'

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

    this.props.onSubmit(this.state.query);
    this.setState({query:''})
  }
  render (){
    const {query} = this.state;
    return (
      <header className={styles.Searchbar }>
        <form  onSubmit={this.handleSubmit}  className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          <input 
            className={styles.SearchFormInput}
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