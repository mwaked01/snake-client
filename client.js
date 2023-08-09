const { symlink } = require('fs');
const net = require('net');

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '::',
    port: 50541,
  });
  
  conn.on('connect', () => {
    console.log ('Successfully connected to game server');
    conn.write('Name: MOE');
    
    //conn.write('Move: up');
  })
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //logs messages coming from the server
  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = connect;