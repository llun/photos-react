var React = require('react')

var ImageBrowser = require('./image-browser.jsx')
var ImageCanvas = require('./image-canvas.jsx')
var Filters = require('./filters.jsx')

var Photos = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ImageBrowser>Browse Image</ImageBrowser>
        <ImageCanvas />
        <Filters/>
      </div>
      )
  }
})

React.render(
  <Photos />,
  document.getElementById("photos")
  )