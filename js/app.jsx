var React = require('react')

var ImageBrowser = require('./image-browser.jsx')

var Photos = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row actions">
          <div className="col-xs-12">
            <ImageBrowser>Choose Image</ImageBrowser>

            <button 
              id="clear_btn" 
              className="btn btn-danger btn-lg">Clear</button>
            <button 
              id="save_btn" 
              className="btn btn-primary btn-lg">Save</button>
          </div>
        </div>
      </div>
      )
  }
})

React.render(
  <Photos />,
  document.getElementById("photos")
  )