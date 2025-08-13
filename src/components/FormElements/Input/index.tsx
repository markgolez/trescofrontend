import {ChangeEvent} from 'react';
import {Field, FieldProps} from 'formik';

export interface InputProps {
  errors: {[field: string]: string};
  label: string;
  name: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  touched: {[field: string]: boolean};
  type?: 'text' | 'number' | 'password';
}

const Input: React.FC<InputProps> = ({errors, label, name, onChange, touched, type = 'text'}) => {
  return (
    <Field name={name}>
      {({field, meta}: FieldProps) => (
        <div style={{marginBottom: 16}}>
          <label style={{display: 'block', marginBottom: 4}}>{label}</label>
          <input
            {...field}
            name={name}
            type={type}
            onChange={(e) => {
              field.onChange(e);
              onChange?.(e);
            }}
            style={{
              width: '100%', 
              padding: 8, 
              borderRadius: 4, 
              border: errors[name] && touched[name] ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors[name] && touched[name] && (
            <div style={{color: 'red', fontSize: 12, marginTop: 4}}>{errors[name]}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default Input; 