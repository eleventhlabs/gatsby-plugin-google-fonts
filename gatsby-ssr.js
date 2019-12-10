'use strict'

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.onRenderBody = function(_ref, options) {

  // Iterate through each font to get location on the web.
  const cssFileUris = options.fonts.map((fontfile) => {
    return 'https://' + options.host + '/' + fontfile;
  })

  // Create link elements to each font .css file.
  const linkElements = cssFileUris.map((link) => {
    return _react2.default.createElement('link', {
      key: 'fonts',
      href: link,
      rel: 'stylesheet'
    })
  })

  // Stuff links in the head
  const setHeadComponents = _ref.setHeadComponents
  setHeadComponents(linkElements)
}
