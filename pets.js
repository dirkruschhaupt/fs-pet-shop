'use strict';

//built in modules
let fs = require('fs');
let path = require('path');

let petsFile = path.join(__dirname , 'pets.json');

let commands = ["read", "create", "update", "destroy"];

let node = path.basename(process.argv[0]);
let file = path.basename(process.argv[1]);

//console.log("Node process", node);
//console.log("file process", file);

let command = process.argv[2];

//let age = path.basename(process.argv[3]);
//let kind = path.basename(process.argv[4]);
//let name = path.basename(process.argv[5]);


if (commands.indexOf(command) == -1) {
  //outputs error if incorrect input
  console.error('Usage: node pets.js [read | create | update | destroy]');
  process.exit(1);
} else {
  //looks to see what command was entered to process that
//  switch (command) {
    //reads out the line in our array
//    case "read":
      //fs.readFile(petsFile, 'utf8', function(data) {
        //let pet = JSON.parse(data);
        //console.log(pet);
    //  });


      //console.log(age, kind, name);
//    case "create":
      //console.log();
//    case "update":
//    case "destroy":
//      break;
//    default:
    //  console.error('Usage: node pets.js [read | create | update | destroy]');
    //  process.exit(1);
  }
//}




/*
let looping = require('./pets2.js')
//calls just thre one function in pets2.js
console.log(looping.loopingFunction);
//calls function, simaliar to the console.log
looping.loopingFunction();
*/



//


//
// let guestsPath = path.join(__dirname, 'pets.json');
//
// let age = path.basename(process.argv[0]);
// let kind = path.basename(process.argv[1]);
// let name = process.argv[2];
//
// if (cmd === 'read') {
//   fs.readFile(petsPath, 'utf8', function(err, data) {
//     if (err) {
//       throw err;
//     }
//
//     let guests = JSON.parse(data);
//
//     console.log(guests);
//   });
// }
// else if (cmd === 'create') {
//   fs.readFile(guestsPath, 'utf8', function(readErr, data) {
//     if (readErr) {
//       throw readErr;
//     }
//
//     let pets = JSON.parse(data);
//     let pet = process.argv[3];
//     let age = process.argv[3];
//     let kind = process.argv[4];
//     let name = process.argv[5];
//
//
//     if (!guest) {
//       console.error(`Usage: ${age} ${kind} ${name} GUEST`);
//       process.exit(1);
//     }
//
//     pets.push(pet);
//
//     var petsJSON = JSON.stringify(pets);
//
//     fs.writeFile(petsPath, petsJSON, function(writeErr) {
//       if (writeErr) {
//         throw writeErr;
//       }
//
//       console.log(pet);
//     });
//   });
// }
// else {
//   console.error(`Usage: ${age} ${kind} ${name} [read | create]`);
//   process.exit(1);
// }
