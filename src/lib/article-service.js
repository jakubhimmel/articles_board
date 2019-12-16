import axios from 'axios';

class Article {
    constructor() {
        this.article = axios.create({
            baseURL: 'http://localhost:5000/articles',
            withCredentials: true,
        });
    }

    articleByTopic( name ) {
        
        return this.article.get(`/topic/${name}`).then(response => response.data);
    }
}

const articleService = new Article();

export default articleService;