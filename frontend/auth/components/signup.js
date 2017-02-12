import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField} from '../helpers';

class Signup extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="page-auth">
        <form className="form">
          <h2 className="heading">Sign Up</h2>
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

          <div className="fieldset">
            <div>
                <label className="label">Confirm Password</label>
                <input className="input" type="password" />
            </div>
          </div>
          
          <button className="btn btn-primary" action="submit">Sign up</button>    
        </form>
      </div>
    );
  }

}

export default Signup;
