import React, {Component} from 'react';
import styles from './ImageGalleryItem.module.css'
import Modal from './Modal'

export default class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    };

    openModal = ()=> this.setState({isModalOpen: true});
    closeModal = () => this.setState({isModalOpen: false})

    render(){
        const {isModalOpen}=this.state;
        return(
            <div>
                <div className={styles.ImageGalleryItem}>
                    <img onClick={this.openModal} src={this.props.smallUrl} alt="" className={styles.ImageGalleryItemImage}/>
                </div>  
                {isModalOpen && (
                    <Modal onClose={this.closeModal} modalUrl={this.props.modalUrl}/>
                )}                
            </div> 
        )
    }
};


