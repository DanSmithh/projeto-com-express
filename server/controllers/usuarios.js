const controller = {
  index: function(req, res, next) {
    res.render('index', { title: 'Express' });
  }
}

module.exports = controller