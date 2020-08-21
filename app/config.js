const dotenv = require('dotenv');

dotenv.config();

const config = {
    redisHost: process.env.REDISHOST,
    redisPort: process.env.REDISPORT,
    redisPassword: process.env.REDISPASSWORD
}

module.exports = config