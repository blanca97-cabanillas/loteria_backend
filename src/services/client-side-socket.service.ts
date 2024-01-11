import { io } from "socket.io-client";

export const onConnectClientSocket =  (payload:any, endpoint:string = 'notifications') =>{
	const socket = io('http://[::1]:4200');
		socket.on('connect', () => {
			console.log(endpoint);
			socket.emit(endpoint, payload);
			socket.disconnect();
		});
}
	