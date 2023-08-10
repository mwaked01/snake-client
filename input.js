let connection; //Global scoped to hold the object value of connect

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // read data from user input
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  //movement control
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
  //message display control
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