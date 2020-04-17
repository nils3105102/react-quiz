import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-63950.firebaseio.com/'
});