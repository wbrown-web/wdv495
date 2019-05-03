const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

// console.log(__filename); //__filename and __dirname are parameters that are passed through the function that is consuming the node module. 
// console.log(__dirname);


class Logger extends EventEmitter { //using the extends gives us all the functionality of the EventEmitter class and allows us to add extra functionality
log(message) {
    // Send http request
    console.log(message);

    //Raised an event
    // commented out of app.js after adding into logger.js

    this.emit('messageLogged', {id: 1, url: 'http:' });   
    }
}

//module.exports
//module.exports.log = log; //can export a single function or an object
module.exports = Logger;
// module.esports.endPoint = url;
//Everything in the module is only available inside this module and doesn't have global scope
