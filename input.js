//const { connect } = require("http2");

let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  //console.log(connection);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  
  if (key === 'f') {
    connection.write('Say: Uh-oh');
  }
  if (key === 'g') {
    connection.write('Say: LOL');
  }
  if (key === 'h') {
    connection.write('Say: Yikes');
  }

};

module.exports = {
  setupInput,
};