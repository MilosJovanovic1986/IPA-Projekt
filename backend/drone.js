// Created dgram module which provides implementation of UDP datagram sockets
const dgram = require('dgram');
const wait = require('waait');

// Connection via IP addresse and UDP port
const PORT = 8889;
const HOST = '191.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

drone.on('message', message => {
    console.log(`-> : ${message}`);
});

// Created callback handle error function 
function handleError(err) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    }
}

// Send battery? command to drone
drone.send('command', 0, 7, PORT, HOST, handleError);
drone.send('battery?', 0, 8, PORT, HOST, handleError);

/* My first try to build a connection between drone and PC. It was successuful and I build up the connection, 
  but after that I lose it and can't build it again, will try to find what is the problem or will create 
  or find some another solution. */ 

