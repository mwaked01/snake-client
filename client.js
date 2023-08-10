const net = require('net');
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: MOE');
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //logs messages coming from the server
  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = connect;