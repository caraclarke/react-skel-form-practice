var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function() {
    if (!this.refs.fieldEmail.state.valid) {
      // anytime you store a ref (id) it goes into refs automatically
      console.log('form wrong');
    } else {
      // if had server/ email server this is where you would submit it
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value, // grab email out store it
        firstName: this.refs.fieldName.state.value
      }
      console.log('form fine');
    }
  },
  render: function() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="First" ref="fieldName" />
            <EmailField ref="fieldEmail" />
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
