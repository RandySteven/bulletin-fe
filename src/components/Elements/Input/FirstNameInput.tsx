import React from 'react';

interface FirstNameInputProps {
  labelClassName?: string; // Optional class name for the label
  inputClassName?: string; // Optional class name for the input
  formData: { firstName: string }; // Interface for form data with email property
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input change
}

const FirstNameInput: React.FC<FirstNameInputProps> = ({
  labelClassName = '',
  inputClassName = '',
  formData,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor="firstName" className={labelClassName}>First Name:</label>
      <input
        type="firstName"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        className={inputClassName}
      />
    </div>
  );
};

export default FirstNameInput;
