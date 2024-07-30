var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


const path = require("path");

const filepath= path.join("users", "bramha", "reddy", "notes.txt");
console.log(filepath);