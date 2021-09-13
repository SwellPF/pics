import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eaL_q81ufXa_57CouYUufzwA3Fk0RAB3xKWM3xyf0vE'
    }
});