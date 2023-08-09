const net = require('net');

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '::',
    port: 50541,
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