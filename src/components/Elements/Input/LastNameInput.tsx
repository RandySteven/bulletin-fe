import React from 'react';

interface LastNameInputProps {
  labelClassName?: string; // Optional class name for the label
  inputClassName?: string; // Optional class name for the input
  formData: { lastName: string }; // Interface for form data with email property
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input change
}

const LastNameInput: React.FC<LastNameInputProps> = ({
  labelClassName = '',
  inputClassName = '',
  formData,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor="lastName" className={labelClassName}>Last Name:</label>
      <input
        type="lastName"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        className={inputClassName}
      />
    </div>
  );
};

export default LastNameInput;
