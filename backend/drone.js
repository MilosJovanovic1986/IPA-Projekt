// // Created dgram module which provides implementation of UDP datagram sockets
// const dgram = require('dgram');
// const wait = require('waait');

// // Connection via IP addresse and UDP port
// const PORT = 8889;
// const HOST = '191.168.10.1';
// const commandDelays = require('./commandDelays');

// const drone = dgram.createSocket('udp4');
// drone.bind(PORT);

// drone.on('message', message => {
//     console.log(`-> : ${message}`);
// });

// // Created callback handle error function 
// function handleError(err) {
//     if (err) {
//         console.log('ERROR');
//         console.log(err);
//     }
// }

// // Send battery? command to drone
// // drone.send('command', 0, 7, PORT, HOST, handleError);
// // drone.send('battery?', 0, 8, PORT, HOST, handleError);
// const commands = ['command', 'battery?', 'takeoff', 'land'];

// const i = 0;

// async function go() {
//     const command = commands[i];
//     const delay = commandDelays[command];
//     console.log(`running command: ${command}`);
//     drone.send(command, 0, command.length, PORT, HOST, handleError);
//     await wait(delay);
//     i += 1;
//     if (i < commands.length) {
//         return go();
//     }
//     console.log('drone!');
// }

// go();

// /* My first try to build a connection between drone and PC. It was successuful and I build up the connection, 
//   but after that I lose it and can't build it again, will try to find what is the problem or will create 
//   or find some another solution. */ 

// --------------------------------------------------------------------------------------------------- //
//                                                                                                     //
//          My second try to start the drone is working... I continue my investigation further         //
//                                                                                                     //
// --------------------------------------------------------------------------------------------------- // 



class Tello {

	constructor(){
		this.tello_address = '192.168.10.1';
		this.command_port = 8889;

		const dgram = require('dgram');
		this.command_socket = dgram.createSocket('udp4');
		this.initCommandSocket();
	}

	// Function for handling incoming messages & errors from tello
	initCommandSocket(){
		this.command_socket.on('message', (msg, rinfo) => {
			console.log(`got ${msg}`)
		});
		this.command_socket.on('error', (err) => {
				console.log(`error: ${err}\n closing socket`);
				this.command_socket.close();
		});
		this.command_socket.on('listening', () => {
			let address = this.command_socket.address();
			console.log(`established connection with ${address.address}:${address.port}`)
		});
		this.command_socket.bind(this.command_port);
	}

	// Function for sending commands to tello
	sendCommand(message){
		var command = new Buffer(message);
		this.command_socket.send(command, 0, command.length, this.command_port, this.tello_address, (err, bytes) =>{
			if(err)
				console.log(err);
		})
	}

	// Function to command the drone through command line
	startCLI(){
		// First enter SDK mode:
		this.sendCommand('command');
		// Create CLInterface
		const readline = require('readline');
		const rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout
		});

		let that = this;
		rl.on('line', (line) => {
			// If we type in close, close interface
			if(line === 'close'){
				rl.close();
			}
			// Send command receive from CL to tello
			that.sendCommand(line);
		}).on('close', () => {
			// Upon closing interface, terminate program
			that.command_socket.close();
			process.exit(0);
		})
	}
}

// Init drone and start
let drone = new Tello();
drone.startCLI();

// Close socket connection upon exception
process.on('uncaughtException', () => {
	drone.command_socket.close();
});


