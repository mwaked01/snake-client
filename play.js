/*
this is where the connection and user input functions are called.
*/

const connect = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");

setupInput(connect());