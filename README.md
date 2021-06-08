# Websocket Service

## Dependencies
- Express - The web server
- Redis - Retrieves published data.
- Socket.IO - Enables real-time, bidirectional and event-based communication.
## Installation

Create a `.env` file and add the following
```
NODE_ENV=development
PORT=3001
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_CHANNEL=app:tweets
```

Install the dependencies

`npm install`

Start the web socket server

`npm run start`

##### Note
This project is part of my MSc thesis.
