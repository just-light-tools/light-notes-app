'use strict'

module.exports = app => {
  app.get('/', 'home.index')
  app.get('/note', 'note.getList')
  app.post('/note', 'note.saveNote')
}
