var Photos = React.createClass({
  render: function() {
    return (
      <div class="row actions">
        <div class="col-xs-12">
          <ImageBrowser>Choose Image</ImageBrowser>

          <button 
            id="clear_btn" 
            className="btn btn-danger btn-lg">Clear</button>
          <button 
            id="save_btn" 
            className="btn btn-primary btn-lg">Save</button>
        </div>
      </div>
      );
  }
})

React.render(
  <Photos />,
  document.querySelector('.container')
  )