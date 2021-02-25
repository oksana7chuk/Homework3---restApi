import axios from 'axios';

const key = '20241314-d576f6d1c903a70ce8c9bb38c';
const page = '1';
const per_page = '&per_page=12'
const baseUrl = `https://pixabay.com/api/?key=${key}`

export const fetchImages = (query = '') => 
axios.get(baseUrl +'&q=' + query+'&page='+page+'&image_type=photo&orientation=horizontal'+per_page)
