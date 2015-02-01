var React = require('react')

var ImageCanvas = React.createClass({
  render: function() {
    return (
      <div className="row image-canvas">
        <div className="col-xs-12">
          <canvas id="canvas" width="800" height="800" data-caman-hidpi-disabled="true"></canvas>
        </div>
      </div>
      )
  }
})

module.exports = ImageCanvas