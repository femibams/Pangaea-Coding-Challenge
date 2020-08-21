const axios = require('axios')

const postRequest = (url, data) => {
    return axios({
        method: 'post',
        url,
        data
      })
}

module.exports = { postRequest }