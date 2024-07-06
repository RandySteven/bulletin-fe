import React from 'react';

interface PasswordInputProps {
  labelClassName?: string; // Optional class name for the label
  inputClassName?: string; // Optional class name for the input
  formData: { password: string }; // Interface for form data with email property
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input change
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  labelClassName = '',
  inputClassName = '',
  formData,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor="password" className={labelClassName}>Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className={inputClassName}
      />
    </div>
  );
};

export default PasswordInput;
