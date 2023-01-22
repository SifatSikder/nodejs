//from here we are going to start event driven programming in nodejs

const EventEmitter = require('events');

const eventEmitter= new EventEmitter();

//event listener(click is the event name and name is the parameter of this event)
eventEmitter.on('click',(name)=>{
    console.log(`Hey ${name}-->you are in the click function`);
})

//we can also listen same function more than one time
eventEmitter.on('click',()=>{
    console.log(`you are in the click function`);
})

//event responder(click is the event name and sifat is the argument to that event)
eventEmitter.emit('click','Sifat');

