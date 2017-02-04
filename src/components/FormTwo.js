import React, { Component, PropTypes } from 'react';
import { reduxForm, actions, Field } from 'redux-form';

import validate from './validate';
import renderField from './renderField';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class FormTwo extends Component {

  render() {
    const {handleSubmit} = this.props;
    const { fields: { username, password, email,city } } = this.props;

    const renderDateOfBirth = ({input, placeholder, defaultValue, className, meta: {touched, error} }) => (
        <div>
            <DatePicker {...input} dateForm="MM/DD/YYYY" className={className} selected={input.value ? moment(input.value) : null} />
            {touched && error && <span>{error}</span>}
        </div>
    );
    return (
      <div className="form-content mt-5">
          <form onSubmit={handleSubmit} className="form-content">

            <div className="form-group row">
              <label className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-form-label">Username</label>
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <Field name="username" className="form-control" type="text" component={renderField} />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-form-label">Password</label>
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <Field name="password" type="password" className="form-control" component={renderField} />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-form-label">Date Of Birth</label>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                  <Field name="dateOfBirth" className="form-control  ml-3   col-lg-10 col-md-10 col-sm-12 col-xs-12" component={renderDateOfBirth} dateFormat="DD.MM.YYYY" showYearDropdown="{true}" />
                </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-form-label">Email</label>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                  <Field type="text" className="form-control" name="email" component={renderField} label="email" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-form-label">City</label>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                  <Field type="text" name="city" className="form-control" component={renderField} label="city" />
                </div>
            </div>

            <div className="form-group text-center ml-5">
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <button className="btn btn-success btn-lg" type="submit" name="submit">Submit</button>
              </div>
            </div>
          </form>
      </div>
    );
  }
}
export default reduxForm ({
  form: 'signup',
  destroyOnUnmount: false,
  fields: ['username', 'password', 'dateOfBirth', 'email', 'city'],
  initialValues: {'username': '', 'password': '', 'dateOfBirth': '09/28/1984', 'email': '', 'city': ''},
  forceUnregisterOnUnmount: true,
  validate
})(FormTwo);
