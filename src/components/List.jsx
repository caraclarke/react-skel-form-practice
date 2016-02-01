var React = require('react');
var ListItem = require('./ListItem.jsx');

var nameList = [
  {'id': 1, 'name': 'Sarah'},
  {'id': 2, 'name': 'James'},
  {'id': 3, 'name': 'Pancho'}
];

var List = React.createClass({
  render: function() {
    var listItems = nameList.map(function(item) {
      return <ListItem key={item.id} name={item.name} />
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;