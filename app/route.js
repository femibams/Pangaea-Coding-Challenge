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
    
    app.post('/subscribe/:topic', (req, res) => {
        const { topic } = req.params
        let reqBodyData = req.body

        // Fetch body of data from malformed body input
        reqBodyData = JSON.parse(Object.keys(reqBodyData)[0])

        // Create Subscription 
        client.set(topic, JSON.stringify(reqBodyData), (err, reply) => {
            if (err) {
                res.status(500).send(`An error occured -> ${err}`)
            }

            res.status(200).send('subscription created!!!')
        })
    })

}

