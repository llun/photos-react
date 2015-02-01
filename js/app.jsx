var React = require('react')

var ImageBrowser = require('./image-browser.jsx')
var ImageCanvas = require('./image-canvas.jsx')
var Filters = require('./filters.jsx')

var Photos = React.createClass({
  handleFileChange: function(file) {
    this.setProps({ file: file })
  },
  handleClearCanvas: function() {
    this.setProps({ file: null })
  },
  handleSaveCanvas: function() {
    console.log ('Uploading to somewhere')
  },
  render: function() {
    return (
      <div className="container">
        <ImageBrowser 
          onClearCanvas={this.handleClearCanvas}
          onSaveCanvas={this.handleSaveCanvas}
          onFileChange={this.handleFileChange}>Browse Image</ImageBrowser>
        <ImageCanvas file={this.file} />
        <Filters/>
      </div>
      )
  }
})

React.render(
  <Photos />,
  document.getElementById("photos")
  )