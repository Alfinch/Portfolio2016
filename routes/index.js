exports.index = function(req, res) {
    var name = req.params.name;
    res.render('index', {
        name: name
    });
};

exports.err404 = function(req, res) {
    res.render('error404');
};