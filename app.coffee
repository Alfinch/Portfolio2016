express = require 'express'
app = express()

app.set 'view engine', 'jade'

app.get '/:name(\\w+)', (req, res) ->
    name = req.params.name
    res.render 'index', {name: name}

app.get '*', (req, res) ->
    res.render 'error404'

server = app.listen 3000, ->
    console.log 'Listening on port 3000'