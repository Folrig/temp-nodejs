const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, money) => {
    console.log(`Response event seen! Event number 1 is firing!\n${name} owes me ${money}!!!`);
});
customEmitter.on('response', () => {
    console.log('Response event number 2 has fired!');
});

customEmitter.emit('response', 'Ronald', 1700);