import axios from 'axios';

export async function fetchImages(value, page) {
    const url = 'https://pixabay.com/api/'
    const key = '34036991-3a93d97c20a0702a529533207';
    const filter = `?key=${key}&q=${value}$&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
    return await axios.get(`${url}${filter}`).then(response => response.data);
}



// https://pixabay.com/api/?key=34036991-3a93d97c20a0702a529533207&q=yellow+flowers&image_type=photo