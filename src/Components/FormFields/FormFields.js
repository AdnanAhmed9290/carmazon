import React, { useState } from 'react';
import { Field } from 'formik';
import { FormGroup, Label, Input, Tooltip } from 'reactstrap';

export const InputField = ({
  name,
  type = 'text',
  label,
  tooltipPlacement = 'bottom',
  formGroupClass = '',
  ...rest
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <Field name={name}>
      {({ field, meta, form: { submitCount } }) => (
        <>
          <FormGroup id={`input-field-${name}`} className={formGroupClass}>
            <Label for={name}>{label}</Label>
            <Input
              type={type}
              {...field}
              id={name}
              invalid={Boolean(meta.error) && (meta.touched || submitCount > 0)}
              {...rest}
            />
          </FormGroup>
          {meta.error && (
            <Tooltip
              isOpen={tooltipOpen}
              toggle={() => setTooltipOpen(s => !s)}
              placement={tooltipPlacement}
              target={`input-field-${name}`}>
              {meta.error}
            </Tooltip>
          )}
        </>
      )}
    </Field>
  );
};

export const SelectField = ({
  name,
  label,
  options = [],
  tooltipPlacement = 'bottom',
  formGroupClass = '',
  ...rest
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <>
          <FormGroup id={`select-field-${name}`} className={formGroupClass}>
            <Label for={name}>{label}</Label>
            <Input type="select" {...field} id={name} invalid={Boolean(meta.error)} {...rest}>
              {options.map(o => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </Input>
          </FormGroup>
          {meta.touched && meta.error && (
            <Tooltip
              isOpen={tooltipOpen}
              toggle={() => setTooltipOpen(s => !s)}
              placement={tooltipPlacement}
              target={`select-field-${name}`}>
              {meta.error}
            </Tooltip>
          )}
        </>
      )}
    </Field>
  );
};
