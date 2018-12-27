const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
  let users = [{ name: '赤瞳' }, { name: '尼尔' }, { name: '卡兹克' }, { name: '嘉文四世' }, { name: '伊芙琳' }]
  res.send(JSON.stringify(users))
  res.end('200')
})

module.exports = router
