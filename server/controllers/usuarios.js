const usuariosPaceholder = require('../data/usuariosPlaceholder.json')

const controller = {
  index: function(req, res, next) {
    res.render('usuarios', {
       titulo: 'Usúarios',
      subtitulo: 'Você está na página Usuários',
      usuarios: usuariosPaceholder
     });
  }
}

module.exports = controller