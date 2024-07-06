import React from 'react';

interface ConfirmPasswordInputProps {
  labelClassName?: string; // Optional class name for the label
  inputClassName?: string; // Optional class name for the input
  formData: { confirmPassword: string }; // Interface for form data with email property
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input change
}

const ConfirmPasswordInput: React.FC<ConfirmPasswordInputProps> = ({
  labelClassName = '',
  inputClassName = '',
  formData,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor="confirmPassword" className={labelClassName}>Confirm Password:</label>
      <input
        type="confirmPassword"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        className={inputClassName}
      />
    </div>
  );
};

export default ConfirmPasswordInput;
