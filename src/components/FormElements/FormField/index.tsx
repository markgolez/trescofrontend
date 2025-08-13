import {ReactNode} from 'react';

export interface FormFieldProps {
  children: ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({children}) => {
  return <div style={{marginBottom: 16}}>{children}</div>;
};

export default FormField; 