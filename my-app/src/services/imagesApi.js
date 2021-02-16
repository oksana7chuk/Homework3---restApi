import axios from 'axios';

const key = '20241314-d576f6d1c903a70ce8c9bb38c';
const baseUrl = `https://pixabay.com/api/?key=${key}`

export const fetchImages = (query = 'nature') => axios.get(baseUrl +'&q=' + query)
