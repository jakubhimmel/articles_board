import axios from 'axios';

class Article {
    constructor() {
        this.article = axios.create({
            baseURL: process.env.REACT_APP_API_URL + '/articles',
            withCredentials: true,
        });
    }

    articleByTopic( name ) {
        return this.article.get(`/topics/${name}`).then(response => response.data);
        
    }

    articleDetailById( id ) {
            return this.article.get(`/${id}`).then(response => response.data)
    }

    articleByName( searchResults ) {
        return this.article.get(`/by-name/${searchResults}`).then(response => response.data)
}

    createNewArticle( newArticle ) {
        return this.article.post('/create', newArticle).then(response => response.data)
}

}


const articleService = new Article();

export default articleService;