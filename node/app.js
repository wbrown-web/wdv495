//Tutorial from https://www.youtube.com/watch?v=TlB_eWDSMt4

// global objects
    //Standard JS global objects
        // setTimeout(); 
        // clearTimeout(); 
        // setInterval();  //repetitively call a function after a set delay.
        // clearInterval(); //stop the repetitive call
    // Browsers
        // window object is how we typically access console.log or actually windows.console.log
        // console.log
        // simply console.log
        // similiarly when we decalre a variable : var message = ''; 
        // we can access the variable via
    // Node
        // we have access to the global object so we can do the same things as above but preface it with global.console.log vs window.console.log
        // you don't have to preface them with global.
        // variables are NOT added to the global object!
        // functions are NOT added to the global object!
        // They are ONLY defined inside the file they are written in, which is because of Node's modular system. 

//         function sayHello(name) {
//     console.log('Hello ' + name);  //console.log is part of the global object and has a global scope which means we can access it anywhere and in any functions.
// }

// sayHello('Will');
// console.log(window);  //This doesn't work because we don't have access to the window or the dom. This is what we get with the browser which we don't have access to. 
// const log = require('./logger');

// log('message');


// // *****  Working with Node Modules  *****

// const path = require('path');  // if we have ./ or ../ node assumes it is a file and looks for the file in the directory. Otherwise it assumes it is one of it's modules
// var pathObj = path.parse(__filename); //__filename is one of the arguments from the module wrapper

// console.log(pathObj); //easier to work with the path module rather than working with strings. As we can see it outputs:

// // { root: 'C:\\',
// //   dir: 'C:\\xampp\\htdocs\\wdv495\\node',
// //   base: 'app.js',
// //   ext: '.js',
// //   name: 'app' }


// // ***** Working with the OS Module ********

// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// // Template String from ES6 (another easier way to do this so you dont have to concatinate)

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// // ****** Working With File System In Node ******

// const fs = require('fs');

// fs.readdirSync('./'); // Will return all the files in the current folder

// // should never choose the Sync version. This will only allow 1 thread at a time and jam up your system. 

// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });


// ****** Events Module ******

// EventEmitter (one of the core building blocks of Node. Lots of stuff based on this)

const EventEmitter = require('events');  //Uppcase of EventEmitter indicates that it is a CLASS

// const emitter = new EventEmitter(); // this is the actual object creating a new instance of the class

//Register a listener (HAS TO BE CALLED BEFORE THE EVENT IS RAISED. AKA BEFORE EMIT)
                            //can also call this w/ ES6 with arrow functions ('messageLogged' , (arg) => {
emitter.on('messageLogged', function(arg) { //some people use arg can also use e, to refer to event or eventArg doesn't matter personal choice
    console.log('Listener called', arg);
});

// //Raised an event
// // commented out of app.js after adding into logger.js

// emitter.emit('messageLogged', {id: 1, url: 'http:' });

//Raise: logging (data: message)

const Logger = require('./logger');
const logger = new Logger(); //instead of using an instance of the class Emitter we use a custom class that we defined above and extends the EventEmitter class

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');