import React from 'react';

interface EmailInputProps {
  labelClassName?: string; // Optional class name for the label
  inputClassName?: string; // Optional class name for the input
  formData: { email: string }; // Interface for form data with email property
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input change
}

const EmailInput: React.FC<EmailInputProps> = ({
  labelClassName = '',
  inputClassName = '',
  formData,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor="email" className={labelClassName}>Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className={inputClassName}
      />
    </div>
  );
};

export default EmailInput;
