import React from 'react';

const FullNameField = ({ value, onChange }) => {
  return (
    <label>
      Full Name:
      <input
        type="text"
        value={value}
        required
        minLength={8}
        maxLength={30}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default FullNameField;
