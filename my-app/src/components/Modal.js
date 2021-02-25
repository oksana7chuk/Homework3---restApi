import React, { Component, createRef } from 'react';
import styles from './Modal.module.css'

export default class  Modal extends Component {
    overlayRef = createRef();

   componentDidMount(){
       window.addEventListener('keydown', this.handleKeyPress)
   }
   componentWillUnmount(){
       window.removeEventListener('keydown', this.handleKeyPress)
   }
   handleKeyPress = e => {
       if (e.code !== 'Escape') return;
       this.props.onClose();
   }
   handleOverlayClick = e => {
       const {current} = this.overlayRef;
       if (current && e.target !== current){
           return;
        };
       this.props.onClose();
   }
    render (){
        return (
            <div className={styles.Overlay} ref={this.overlayRef} onClick={this.handleOverlayClick}>
                <div className={styles.Modal}>
                    <img 
                    src={this.props.modalUrl} 
                    alt="no image" 
                    />
                </div>
            </div>
        )
    }
}
