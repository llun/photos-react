var ImageBrowser = React.createClass({
  render: function() {
    var style = {
      display: 'none'
    }
    return (
      <div>
        <input type="file" accept="image/*" style={style}></input>
        <button className="btn btn-default btn-lg">{this.props.children}</button>
      </div>
      )
  }
})