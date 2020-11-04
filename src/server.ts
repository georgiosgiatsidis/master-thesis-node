import * as redis from 'redis';
import * as express from 'express';
import * as SocketIO from 'socket.io';
import { Server } from 'http';
import config from './config';

const app = express();
const http = new Server(app);
const io = SocketIO(http);

const port = config.port;

const redisClient = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
});

redisClient.subscribe(config.redis.channel);

io.on('connection', (socket: SocketIO.Socket) => {
  redisClient.on('message', (channel: string, message: string) => {
    const t = JSON.parse(message);
    socket.emit(channel, t);
  });
});

http.listen(port, () => {
  console.log(`Listening on *:${port}`);
});
