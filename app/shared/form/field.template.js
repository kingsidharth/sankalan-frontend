import React from 'react';

function CustomFieldTemplate(props) {
  const {
    id,
    classNames,
    label,
    help,
    required,
    description,
    errors,
    children
  } = props;

  return (
    <div className={classNames}>
      <label
        className="label field-label"
        htmlFor={id}>{label}{required ? "*" : null}</label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
}

export default CustomFieldTemplate;
