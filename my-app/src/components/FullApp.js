import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from "react-loader-spinner";
import ErrorNotification from './ErrorNotification'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {fetchImages} from '../services/imagesApi';

export default class FullApp extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  }
  componentDidMount(){
    this.fetchImages()
  }
  fetchImages = query => {
    this.setState({isLoading: true});
    
    fetchImages(query)
    .then(({data})=>this.setState({images: data.hits}))
    .catch(error=>this.setState({error}))
    .finally(()=> {this.setState({isLoading: false})})
  };
 
  render() {
    const {images,isLoading,error} = this.state;

    return (
    <div>
      <Searchbar onSubmit={this.fetchImages}/>
      {error && <ErrorNotification text={error.message}/>}
      {isLoading && <Loader type="Puff" color="#00BFFF" height={150} width={150} />}
      {images.length > 0 && <ImageGallery images={images}/>}
    </div>) 
  }
};

