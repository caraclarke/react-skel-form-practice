var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function() {
    if (!this.refs.fieldEmail.state.valid) {
      // anytime you store a ref (id) it goes into refs automatically
      console.log('form wrong');
    } else {
      // send request to email host or server
      var httpRequestBody = {
        email: this.refs.fieldEmail.state.value, // grab email out store it
        firstName: this.refs.fieldName.state.value
      }
      console.log('form fine');
      this.refs.fieldEmail.clear();
      this.refs.fieldName.clear();
    }
  },
  render: function() {
    return (
      <div className="col-sm-10">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="First" ref="fieldName" />
            <br />
            <EmailField ref="fieldEmail" />
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
