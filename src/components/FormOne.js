import React, { Component } from 'react';
import {reduxForm, Field } from 'redux-form';

import validate from './validate';
import renderField from './renderField';

// Tether (required for Bootstrap 4.x)
import Tether from 'tether/dist/css/tether.css';
//Bootstrap 4
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class FormOne extends Component {
  render() {
    const {handleSubmit} = this.props;
    const gender = ['man', 'woman'];
    const status = ['single', 'attached', 'in an open relationship', 'part of a couple'];
    const seeking = ['men', 'women', 'men and women'];

    const renderGenderSelector = ({select, input, meta: {touched, error}}) => (
      <div>
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <select {...input} className="form-control">
            {gender.map(val => <option value={val} key={val}>{val}</option>)}
          </select>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )

    const renderStatusSelector = ({select, input, meta: {touched, error}}) => (
      <div>
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <select {...input} className="form-control">
            {status.map(val => <option value={val} key={val}>{val}</option>)}
          </select>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )

    const renderSeekingSelector = ({select, input, meta: {touched, error}}) => (
      <div>
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <select {...input} className="form-control">
            {seeking.map(val => <option value={val} key={val}>{val}</option>)}
          </select>
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )

    return (
      <div className="form-content mt-5">
        <form onSubmit={handleSubmit} className="form-content">

          <div className="form-group row">
            <label className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-form-label">I am a</label>
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <Field name="gender" className="form-control" type="select" component={renderGenderSelector} />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-form-label">Marital Status</label>
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <Field name="status" className="form-control" type="select" component={renderStatusSelector} />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-form-label">Seeking</label>
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <Field name="seeking" className="form-control" type="select" component={renderSeekingSelector} />
            </div>
          </div>

          <div className="form-group text-center ml-5">
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <button className="btn btn-primary btn-lg" type="submit" name="submit">Next</button>
            </div>
          </div>
        </form>
    </div>
    )
  }
}

export default reduxForm ({
  form: 'signup',
  destroyOnUnmount: false,
  fields: ['gender', 'status', 'seeking'],
  initialValues: {'gender': 'man', 'status': 'single', 'seeking': 'women'},
  forceUnregisterOnUnmount: true,
  validate
})(FormOne);
