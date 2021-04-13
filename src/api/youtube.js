import axios from 'axios';
const KEY = 'AIzaSyCOKi-SR9f4rC6J5a0HmHmBJWzVWvus8Z4'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})