import axios from 'axios';

const KEY = 'AIzaSyAjhCA308yxwGRz--r_zF9q7uxaTQZYmD0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})