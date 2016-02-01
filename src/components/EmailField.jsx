var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({
// validates in every keystroke
// change styling based on valid or not
  getInitialState: function() {
    return { valid: true, value: "" }
  },
  onChange: function(e) {
    var val = e.target.value;

    if (!validator.validate(e.target.value)) {
      this.setState({ valid: false, value: e.target.value });
    } else {
      this.setState({ valid: true, value: e.target.value });
    }
  },
  render: function () {
    var formClass = this.state.valid ? "form-group" : "form-group has-error"
    return (
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value}></input>
      </div>
    );
  }
});

module.exports = EmailField;
// can also say module.exports = React.createClass and do it there
// good practice to put in variables
