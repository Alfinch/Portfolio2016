exports.index = (req, res) ->
    name = req.params.name
    res.render 'index', {name: name}

exports.err404 = (req, res) ->
    res.render 'error404'