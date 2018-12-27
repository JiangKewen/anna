const express = require('express')
const path = require('path')
const app = express()
const getIndex = require('./api/index.js')
const apiUser = require('./api/api.js')

app.use('/static', express.static(path.join(__dirname, 'dist/static')))
app.engine('html', require('express-art-template'))

app.use('/user', apiUser)
app.use('*', getIndex)

app.listen(3000, () => console.log('server run localhost:3000'))
