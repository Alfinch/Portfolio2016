express = require 'express'
app = express()
routes = require './routes'

app.set 'view engine', 'jade'

app.get '/:name(\\w+)', routes.index
app.get '*', routes.err404

server = app.listen 3000, ->
    console.log 'Listening on port 3000'