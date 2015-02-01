var React = require('react')

var Filters = React.createClass({
  render: function() {

    var filters = [
      { name: 'vintage', label: 'Vintage' },
      { name: 'lomo', label: 'Lomo' },
      { name: 'clarity', label: 'Clarity' },
      { name: 'sinCity', label: 'Sin City' },
      { name: 'sunrise', label: 'Sunrise' },
      { name: 'crossProcess', label: 'Cross Process' },
      { name: 'orangePeel', label: 'Orange Peel' },
      { name: 'love', label: 'Love' },
      { name: 'grungy', label: 'Grungy' }
    ]

    return (
      <div className="row filters">
        <div className="col-xs-12">
          <div className="filters-wrapper">
            {filters.map(function(filter) {
              return <button key={filter.name} className="btn btn-default">{filter.label}</button>
            })}
            <button className="btn btn-danger">Reset</button>
          </div>
        </div>
      </div>
      )
  }
})

module.exports = Filters