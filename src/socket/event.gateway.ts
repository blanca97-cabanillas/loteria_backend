import { Bind, Injectable } from '@nestjs/common';
import {
	MessageBody,
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
	WsResponse,
	ConnectedSocket,
} from '@nestjs/websockets';
import { AnyMxRecord } from 'dns';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors: {
		origin: '*',
	},
})
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
	constructor() { }

	@WebSocketServer()
	server: Server;


	afterInit(server: Server) {
		console.log(server);
		//Do stuffs
	}

	handleDisconnect(client: Socket) {
		console.log(`Disconnected: ${client.id}`);
		//Do stuffs
	}

	handleConnection(client: Socket, ...args: any[]) {
		console.log(`Connected ${client.id}`);
		//Do stuffs
	}

}