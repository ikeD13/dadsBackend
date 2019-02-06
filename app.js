const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config()
const environment = process.env.port || 'development'
const config = require('./knexfile.js')[environment]
const knex = require('knex')(config)
const port = process.env.PORT || 3000


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.disable('x-powered-by');


const tableName = 'jokes'

app.get('/', (req, res, next) => {
  knex(tableName)
  .then((rows) => res.status(200).send(rows))
  .catch(err => {
    next(err)
  })
})

app.post('/', (req, res, next) => {
  const text = req.body.text
  const url = req.body.url

  knex(tableName)
  .insert({ text: text, url: url })
  .then(() => res.status(200).send('post successful'))
  .catch(err => {
    next(err)
  })
})

app.patch('/', (req, res, next) => {
  const id = req.body.id
  const text = req.body.text
  const url = req.body.url

  knex(tableName)
  .where({ id: id})
  .update({ text: text, url: url })
  .then(() => res.status(200).send('update successful'))
  .catch(err => {
    next(err)
  })
})

app.delete('/', (req, res, next) => {
  const id = req.body.id

  knex(tableName)
  .where({ id: id })
  .delete()
  .then(() => res.status(200).send('joke deleted'))
  .catch(err => {
    next(err)
  })
})


// Official Error handler
// app.use((err, req, res, next) => {
//   console.error(err.stack)
// })


// G-School method
app.use((req, res, next) => {
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
 console.log('Servers is running on port:', port)
})