import React from 'react';

const renderField = ({ input,type,className, meta: { touched, error } }) => (
  <div>
    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
      <input {...input} type={type} className={className}/>
    </div>
      {touched && error && <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 has-danger"><div className="form-control-feedback">{error}</div></div>}
  </div>
)

export default renderField;
