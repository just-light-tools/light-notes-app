'use strict'

module.exports = appInfo => {
  const config = {
    security: {
      csrf: false,
    },
    mysql: {
      client: {
        host: 'host',
        port: 3306,
        user: 'user',
        password: 'password',
        database: 'database',
      },
    },
  }
  // should change to your own
  config.keys = appInfo.name + '_1501387887230_3100'

  return config
}
