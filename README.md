# ChatApp-Using-Express-Socket.IO-and-HarperDB

# Step 1

Create two separate folder server and Client
Client contains our FrontEnd
Server contains our Backend

# Step 2 

Initialise the front end using Vite (Google about it)
After vite create a folder inside src with Pages that is going to contain our Pages

# Step 3

Decide the UI components
Here we will have 2 components : Home and Chat 
Home is like a login page for user to login (Contains username and then a dropdown to select which room he wishes to join)
Chat is going to have the room specific chats.

# Step 4

Create a home page and then export it to use in App.js
We can do lazy loading for home page but I did it normally.(You might see it wrapped inside a SUSPENSE ignore that)

# Step 5

Create the join room functionality.
For this we are going to create a joinRoom callback that checks if username and select room has values then only it creates a socket event join room which the server has to listen. 

# Learning Step

I created 2 state variables for the purpose of storing username and room information and I created it inside the App component because it is going to be used by Home and Chat both the components. So always push it to the common parent or use some state management library(Not learned yet)

# Moving to the server now(We are going to jump from server to client from time to time)

# Step 6 

Initialise your server folder by installing the packages express , socket.io (using fetch here not axios but you can use axios too) , dotenv



