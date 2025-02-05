# NoSQL-Schema-Design
## API Endpoints

## Users

*   `POST /users`: Create a new user.
*   `GET /users/{user_id}`: Get user details.
*   `PUT /users/{user_id}`: Update user details.
*   `DELETE /users/{user_id}`: Delete a user.
*   `POST /users/{user_id}/follow`: Follow a user.
*   `POST /users/{user_id}/unfollow`: Unfollow a user.

## Posts

*   `POST /posts`: Create a new post.
*   `GET /posts/{post_id}`: Get post details.
*   `PUT /posts/{post_id}`: Update a post.
*   `DELETE /posts/{post_id}`: Delete a post.
*   `POST /posts/{post_id}/like`: Like a post.
*   `POST /posts/{post_id}/unlike`: Unlike a post.
*   `POST /posts/{post_id}/comment`: Add a comment to a post.
*   `DELETE /posts/{post_id}/comment/{comment_id}`: Delete a comment.
*   `POST /posts/{post_id}/share`: Share a post.
