import axios from 'axios';

class Comment {
    constructor() {
        this.comment = axios.create({
            baseURL: process.env.REACT_APP_API_URL + '/comments',
            withCredentials: true,
        });
    }

    createNewComment( articleId,newComment ) {
        
        return this.comment.post(`/${articleId}/create`, newComment ).then(response => {
            console.log('service body and ID', response);

            return response.data 
        }
            );
        
    }
}


const commentsService = new Comment();

export default commentsService;

