# Pangaea-Coding-Challenge

## Setup Instructions

1. Create a `.env` file in the root directory
2. Copy contents of the `sample.env` file into the `.env` file
3. Replace the Redis credentials in the `.env` with your own credentials

### To start up the application
 `sh ./start-server.sh`

### To setup a subscription 
` curl -X POST -d '{ "url": "http://localhost:8000/event"}' http://localhost:8000/subscribe/topic1`

### To publish an event
` curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1
`