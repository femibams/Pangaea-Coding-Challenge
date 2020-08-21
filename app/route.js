const redis = require('redis');
const config = require('./config')
const utils = require('./utils')

// Redis DB connection
const client = redis.createClient({
    host: config.redisHost,
    port: config.redisPort,
    password: config.redisPassword
});

client.on('error', function(error) {
  console.error(error);
});

module.exports.setup = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send('Base URL!!!')
    })
    
}

