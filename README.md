# Article s board

<br>

## Description

This app lets users write, like and comment articles. Users can search for artciles by name or topic. Users can comment on every article. Users can follow different users or topics. 

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start playing into competition
-  **Login:** As a user I can login to the platform so that I can play competitions
-  **Logout:** As a user I can logout from the platform so no one else can use i
-  **Write an article** As a user I can write an article
-  **Favourite an article** As a user I can ad and article to favourites
-  **Upvote or downtvote an article** As a user I can ad and article to favourites
-  **Comment an article** As a user I can ad and article to favourites
-  **Follow  users** As a user I can follow a user. 
-  **Search for articles by name** As a user I can edit a player profile to fit into the tournament view
-  **Search for articles by topic** As a user I want to see the tournament table



## Backlog

-  **Follow  topics** As a user I can follow a specific topic.
-  **Personolised homescreen** Loged in user screen displays personlised articles selection based on followed topics or users. 
-  **Search result page** Searching for articles by topic. 
-  **Tags** Add tags to every article.Users can search by tags.
-  **Log in and Sign up page as a pop up page** Add tags to every article.Users can search by tags.

<br>


# Client / Frontend

## Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | Homepage             | public      | Home page                                        
| `/auth/signup`            | SignupPage           | anon only   | Signup form, link to login, navigate to homepage after signup 
| `/auth/login`             | LoginPage            | anon only   | Login form, link to signup, navigate to homepage after login 
| `/auth/logout`            | n/a                  | anon only   | Navigate to homepage after logout, expire session            
| `/homepage   `            | Homepage             | public,user | Show  search bar and topics list                              
| `/topics/:topic_id`       | Topics Listing       | public,user | List of articles by topic

| `/search-result/:search`  | Search reuslts       | public,user | List of articles by search                              

| `/article/:id`            | Article              | public,user | Displaying an article 
|
| `/profile/:user_id`       | User page            | public,user | Displaying a user profile  
|
| `/article/settings/:id` | Write asrticle page    | user only   | Displaying a page where  user  can wrtie a new article   

| `/article/create-new/:id` | Write asrticle page  | user only   | Displaying a page where  user  can wrtie a new article                                
                                                      

## Components

- HomePage

- LoginPage

- SignupPage

- TopicsPage

- SearchResultPage

- ArticlePage

- Write article page 

- UserProfilePage

- UserProfileSetingsPage

- Navbar


  

 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
  
- Article Service
  - article.search()
  - article.detail(id)
  - article.create(id)
  
- User Service 

  - user.create(id)
  - user.edit(id)

- Topic service
  
  -title
  
- Comments Service
  -user  
  -article  
  -likes 

<br>


# Server / Backend


## Models

User model

```javascript
{
  user_id: 
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: [article_id]
  following: [user_id]
}
```



Topic model

```javascript
 {
   name: {type: String, required: true},
   description: {type: String}
 }
```


Article model

```javascript
{
  article_id: {type: String, required: true},
  article_name:
  img: {type: String},
  text: 
  comments: [comment_id]
}
```



Comment model

```javascript
{
  comment_id: 
  user_id:
  article_id:
  comment_text: 
  likes: [user_id]
}
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/topics`                     |                              |                | 400          | Show all topics                                         |
| GET         | `/topics/:id`                 | {id}                         |                |               | Show specific  topic |
| GET         | `/article/:id`                 | {id}                        |                |               | Show specific  article |
| DELETE      | `/article/delete/:id`         | {id}                         | 201            | 400           | delete article                                             |                                         |
| GET         | `/user/:id`                   | {id}                         |                |               | show specific user                                                                                          |
| PUT         | `/user/settings/:id`           | {password,img}               | 201            | 400          | edit user info                                                   
| DELETE      | `/user/delete/:id`             | {id}                         | 200            | 400          | delete user                                                                                               
| GET         | `/comment/:id`                  | {id}                        |                |               | show specific game  

| DELETE      | `/comment/delete/:id`           | {id}                        |                |               | show specific game                                              


<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/VSvLMSiz/project3) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/jakubhimmel/articles_board)

[Server repository Link](https://github.com/jakubhimmel/articles_board_backend)

[Deployed App Link]( ---- )

### Slides

The url to your presentation slides

[Slides Link]( --- )
