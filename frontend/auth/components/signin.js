import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import {renderField} from '../helpers';

class Signin extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="page-auth">
        <form className="form">
          <h2 className="heading">Sign In</h2>
          
          <div className="fieldset">
            <div>
                <label className="label">Email</label>
                <input className="input" type="text" />
            </div>
          </div>
          
          <div className="fieldset">
            <div>
                <label className="label">Password</label>
                <input className="input" type="password" />
            </div>
          </div>

          <p className="text-error">{this.props.errorMessage}</p>
          <button className="btn btn-primary" action="submit">Sign in</button>    
        </form>
      </div>
    );
  }
}

export default Signin;

