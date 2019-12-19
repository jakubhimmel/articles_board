import axios from 'axios';

class Auth {
    constructor() {
        this.auth = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true,
        });
    }

    signup(user) {
        const { username, password } = user;
        return this.auth
            .post('/auth/signup', { username, password })
            .then(({ data }) => data);
    }

    login(user) {
        const { username, password } = user;
        return this.auth
            .post('/auth/login', { username, password }) // Sending the order
            ////////////////
            .then(({ data }) => data); // Gets the answer
    }

    logout() {
        return this.auth.post('/auth/logout', {}).then(response => response.data);
    }

    me() {
        return this.auth.get('/auth/me').then(response => response.data);
    }

    getUser() {
        return this.auth.get('/users').then(response => {
            console.log(response);
            
        return response.data
    })
            

    }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;