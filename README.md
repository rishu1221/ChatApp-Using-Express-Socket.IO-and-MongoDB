# Features

1. Has Rooms Functionality to talk as a group
2. User can join any room he wants and then chats with other room members
3. User gets welcome message when we joins the room
4. User gets notified if another user joins the same room
5. User recieves the last 100 messages that have been communicated to that specific rooms
6. Each message contains the timestamp for recieved messages and the sender's name.




UI is only for learning purpose

Join Room Page
![image](https://github.com/rishu1221/ChatApp-Using-Express-Socket.IO-and-HarperDB/assets/36557161/fb26805a-1cd8-4466-8bd5-395a708cb45c)

Chat Screen
![image](https://github.com/rishu1221/ChatApp-Using-Express-Socket.IO-and-HarperDB/assets/36557161/13fba650-cf8a-47fe-8e49-83ed38c81aae)



## Learning About Websockets : 

1. Always figure out the flow of the events. (Kaha emit karna hai and kaha listener chahiye means either on server or client)
3. Sockets connection create karna me dont directly pass app which is express ka server instance..Use http module.
4. Once connection ho jaye toh on connection sara events likhte hai on server side.
5. Concept of namespaces is used to manage multiple sets of sockets
6. Rooms are just groups that socket.io track
7. Socket.io has two variables rooms and id
8. Id has the mapping about ki which id is mapped to which
9. rooms has the mapping about all ids mapped to each room
10. Each connection creates new ids.
11. Documentation has lots of things. (Good to read if new use case comes)
12. If login system banana ho toh instead of directly listening to localhost:5173(client server) listen to some route which is protected (Protected route me again Authorisation and Authentication ka logic)
13. Async functions bhi use kar sakte ho for listeners agar DB calls hai toh

# Basically whole idea yahi hai ki kisi bhi side pe event trigger kar sakte ho and uska listener bhi kisi bhi side pe reh sakta hai ... and bas normal backend operations karte raho usi me itna he hai websocket ....Efficiency me thoda time lagega.
