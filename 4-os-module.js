// ---------------OS MODULE----------------------
//importing the built in os module
const os = require('os');
//printing the user information of os
const user = os.userInfo();
 console.log(user);

//method returns the system uptime in seconds
console.log(`The uptime is ${os.uptime()} seconds`);

const currentos = {
    name: os.type(),
    release: os.release(),
    total_memory: os.totalmem(),
    free_memory: os.freemem(),
}

console.log(currentos);