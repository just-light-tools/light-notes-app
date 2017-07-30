'use strict'
exports.getPageInfo = function(index, pageCount) {
  index = parseInt(index)
  pageCount = parseInt(pageCount)
  const pageIndex = index >= 1 ? index : 1
  // default limit 10
  const limit = pageCount ? Math.abs(pageCount) : 10
  return {
    limit,
    offset: (pageIndex - 1) * limit,
  }
}