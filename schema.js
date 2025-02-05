// users collections
const users = {

    "_id": ObjectId,
    "username": "john_doe",
    "email": "john@example.com",
    "passwordHash": "hashed_password",
    "profilePicture": "profile_pic_url",
    "bio": "Short bio about the user",
    "followers": [ObjectId], // List of user IDs
    "following": [ObjectId], // List of user IDs
    "createdAt": ISODate
  
}


// posts collections
const post = {
    
    "_id": ObjectId,
    "userId": ObjectId, // Reference to Users collection
    "content": "This is a post content",
    "media": ["image1.jpg", "video1.mp4"], // Array of media links
    "likesCount": 50,
    "commentsCount": 20,
    "sharesCount": 10,
    "createdAt": ISODate,

//   likes 
"likes" : {

    "_id": ObjectId,
    "userId": ObjectId, // User who liked the post
    "postId": ObjectId, // Reference to Posts collection
    "createdAt": ISODate

    },

"comments" : {

    "_id": ObjectId,
    "userId": ObjectId, // User who commented
    "postId": ObjectId, // Reference to Posts collection
    "comment": "Nice post!",
    "createdAt": ISODate
    }


}