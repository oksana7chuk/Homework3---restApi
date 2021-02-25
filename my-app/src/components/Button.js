import React, {Component} from 'react';
import styles from './Button.module.css'

export default class Button extends Component {
    state = {
        page: ''
    }
    handleLoadMoreImages = e => {
        e.preventDefault();

    }
    render(){
        return (
        <button 
        onClick={this.handleLoadMoreImages} 
        type="button" 
        className={styles.Button}>
        Load more
        </button>
        )
    }
}
