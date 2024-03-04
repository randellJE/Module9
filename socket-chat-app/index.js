const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

const users = {}; // Keeps track of users and their nicknames

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  users[socket.id] = "Anon"; // Assigns a default nickname to the user
  io.emit("user list", Object.values(users)); // Broadcasts the updated user list
  console.log("SERVER - user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
    delete users[socket.id]; // Removes the user from the list
    io.emit("user list", Object.values(users)); // Updates everyone with the new user list
    io.emit("chat message", { msg: "A user has disconnected", system: true });
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", {
      msg: msg,
      user: users[socket.id],
      system: false,
    }); // Broadcasts a message to all users
  });

  socket.on("nickname", (nickname) => {
    const oldNickname = users[socket.id];
    users[socket.id] = nickname; // Updates the nickname
    io.emit("user list", Object.values(users)); // Broadcasts the updated user list
    io.emit("chat message", {
      msg: `${oldNickname} is now known as ${nickname}`,
      system: true,
    });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});