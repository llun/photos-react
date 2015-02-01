var React = require('react')

var ImageBrowser = React.createClass({
  browseFile: function(event) {
    document.getElementById('file-input').click()
  },
  fileChange: function(event) {
    var file = event.target.files[0]
    if (this.props.onFileChange) {
      this.props.onFileChange(file)
    }
  },
  clearCanvas: function(event) {
    if (this.props.onClearCanvas) {
      this.props.onClearCanvas()
    }
  },
  saveCanvas: function(event) {
    if (this.props.onSaveCanvas) {
      this.props.onSaveCanvas()
    }
  },
  render: function() {
    var style = {
      display: 'none'
    }
    return (
      <div className="row actions">
        <div className="col-xs-12">
          <input id="file-input" type="file" accept="image/*" style={style} onChange={this.fileChange}></input>
          <button className="btn btn-default btn-lg" onClick={this.browseFile}>{this.props.children}</button>

          <button 
            id="clear_btn" 
            className="btn btn-danger btn-lg"
            onClick={this.clearCanvas}>Clear</button>
          <button 
            id="save_btn" 
            className="btn btn-primary btn-lg"
            onClick={this.saveCanvas}>Save</button>
        </div>
      </div>
      )
  }
})

module.exports = ImageBrowser