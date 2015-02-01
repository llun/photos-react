var React = require('react')

var ImageBrowser = React.createClass({
  render: function() {
    var style = {
      display: 'none'
    }
    return (
      <div className="row actions">
        <div className="col-xs-12">
          <input type="file" accept="image/*" style={style}></input>
          <button className="btn btn-default btn-lg">{this.props.children}</button>

          <button 
            id="clear_btn" 
            className="btn btn-danger btn-lg">Clear</button>
          <button 
            id="save_btn" 
            className="btn btn-primary btn-lg">Save</button>
        </div>
      </div>
      )
  }
})

module.exports = ImageBrowser