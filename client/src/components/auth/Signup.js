import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from "../../actions";
class Signup extends Component {
  // writing arrow function to prevent using bind(this)
  onSubmit = (formProps) => {
    console.log(formProps)
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field 
            name="email"
            type="text"
            component="input"
            autoComplete="none"
            />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field 
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button>Sign Up</button>
      </form>
    )
  }
}

export default reduxForm({ form: 'signup' })(Signup);