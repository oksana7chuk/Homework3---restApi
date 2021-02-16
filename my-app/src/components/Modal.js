import React, { Component } from 'react';

export default class  Modal extends Component {

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
    render (){
        return 
        <div className="Overlay">
            <div className="Modal">
                <img src="" alt="" />
            </div>
        </div>
    }
}
