const express = require('express')
const axios = require('axios')

const app = express()

const gitAPI = 'https://api.github.com/users/srphilippe'

app.route('/').get((req, res) => {

    axios.get(gitAPI)
    .then(result => result.data)
    .then(data => {
        res.send(`<img src="${data.avatar_url}"/>`)
    })
    .catch(error => console.log(error))

})


app.listen('3000')