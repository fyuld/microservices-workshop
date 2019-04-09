import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import { readHealth } from './health'
import { unicornResource } from './unicorns'

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/unicorns', unicornResource)
app.get('/health', readHealth)

export { app }
