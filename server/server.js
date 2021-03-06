var TAG = '  **-----------server.js : ';

const  path = require('path');
const http = require('http');
const  express = require('express');
const socketIo = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIo(server);

app.use(express.static(publicPath));

   io.on('connection',(socket)=>{
      console.log('New USer Connected');
   });

server.listen(port,()=>{
   console.log(`Server is up on port ${port}`);
});
