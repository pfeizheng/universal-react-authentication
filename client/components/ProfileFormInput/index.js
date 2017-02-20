import React from 'react';

if (process.env.BROWSER) {
  require('./index.scss');
}
const FormInput = ({ input, meta, name, info, label }) => (
  <div>
    <input className="form-control" {...input} placeholder={info}/>
    {
      meta.touched &&
      meta.error &&
      <div className="error">
        <i className="fa fa-exclamation-circle" />
        {meta.error}
      </div>
    }
  </div>
)

export default FormInput;
