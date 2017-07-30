'use strict'

module.exports = app => {
  class Note extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg'
    }

    async getList() {
      app.logger.info(this.ctx.request.body)
      let [ data, success, size ] = [ null, true, 0 ]
      try {
        const index = this.ctx.params.index
        const pageSize = this.ctx.request.query.pageSize
        const query = this.ctx.request.query
        delete query.pageSize
        delete query.index
        data = await this.ctx.service.note.getList(query, index, pageSize)
      } catch (e) {
        success = false
        app.logger.error(e)
      }
      this.ctx.body = { data, success, size }
    }

    async saveNote() {
      app.logger.info(this.ctx.request.query)
      let [ id, success ] = [ null, true ]
      try {
        const note = this.ctx.request.body
        id = await this.ctx.service.note.saveNote(note)
      } catch (e) {
        success = false
        app.logger.error(e)
      }
      this.ctx.body = { id, success }
    }

  }

  return Note
}
