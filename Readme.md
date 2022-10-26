# ReditClone
A small redit clone backend application developed with NodeJs.

The application uses mongoDB database, NodeJs as the JavaScript language for server, Express as the framework,
jwt for authentication, bcrypt for password hashing.

# Models
 User:
   These model will store all the users that are registered on the platform
 SubRedit: 
 AuditModel
 Post 
 Comment
   
 # Features
    * Registration 
    * Login
    
# Registration flow:
  Users will use thier name, email and password to sign up on the platform. The password will be hashed using token will be generated for users to login to the platform using jwt.
# Login:
  User will provide the
  
# Subredit creation:
   A registered user can create a sub redit which is like a community to drop post for people following that community can see and interact with.
 
# Edit sub redit
   Users can edit thier own subredit

#Audit trail
Have use mongodb change stream to monitor changes on subredit insert, update comment and post and then send the audit to the databse to track users activity.
   

        
# Starting the application 
Kindly clone the application from the repository and run npm install to get all the dependencies installed and create .env file with the following details

NODE_ENV= development
PORT = 7000
MONGO_URI=mongodb+srv://ubong_eduok:test1234@myportfolio.ffhj6qo.mongodb.net/test
JWT_SECRET="Dont do anything"

# Possible endpoints
    1 base_url/api/v1/users/register
    2 base_url/api/v1/users/login
    3 base_url/api/v1/r/create
    4 base_url/api/v1/r/update/id
    5 base_url/api/v1/post/create
    6 base_url/api/v1/post/comment

    
# Payloads in requests and methods
    register: {
              name: "string",
              email: "string",
              password: "string",
              }
              Method: POST
              
    login: {
              email: "string",
              password: "string"
              }
              Method: POST
    
    create-subredit: {
               community_name: "string",
               description: "integer",
               community_type: "integer",
               user_id: "integer"
              }
              Method: POST

    update-subredit: {
               community_name: "string",
               description: "string",
               community_type: "string",
               user_id: "integer"
              }
              Method: PUT

    create-comment: {
               body: "string",
               user_id: "integer",
               post_id: "integer",
              }
              Method: POST

            
    create-post: {
               body: "string",
               title: "string",
               user_id: "integer",
               redit_id: "integer",
              }
              Method: POST
