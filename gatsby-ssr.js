'use strict'

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var format = function format(string) {
  return string
    .split(' ')
    .map(function(s) {
      return s.replace(/^\w/, function(s) {
        return s.toUpperCase()
      })
    })
    .join(' ')
}

var getFonts = function getFonts(options) {
  return options.fonts
    .map(format)
    .join('|')
    .replace(/ /g, '+')
}

function getDisplay(options) {
  return options.display ? '&display=' + options.display : ''
}

function getHostUrl (options) {
  return options.host
}

exports.onRenderBody = function(_ref, options) {
  const setHeadComponents = _ref.setHeadComponents

  const link = 'https://' + getHostUrl(options) + '/css?family=' + getFonts(options) + getDisplay(options)
  setHeadComponents([
    _react2.default.createElement('link', {
      key: 'fonts',
      href: link,
      rel: 'stylesheet'
    })
  ])
}
