'use strict'
const utils = require('../utils/dbUtils.js')

module.exports = app => {
  class Note extends app.Service {
    * find(uid) {
      const user = yield this.ctx.db.query(`select * from user where uid = ${uid}`)
      return user
    }

    async getList(query = {}, index = 1, pageSize = 10) {
      let result
      try {
        app.logger.info('get note list params', query, index, pageSize)
        const { limit, offset } = utils.getPageInfo(index, pageSize)
        result = await this.app.mysql('note').select('*').where(query)
          .limit(limit)
          .offset(offset)
        app.logger.info('query note list result:', result)
      } catch (e) {
        app.logger.error(e)
      }
      return result
    }

    async saveNote(data) {
      try {
        app.logger.info('save note data', data)
        data.ctime = new Date()
        const result = await this.app.mysql('note').insert(data)
        return result[0]
      } catch (e) {
        app.logger.error(e)
      }
    }
  }
  return Note
}