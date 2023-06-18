import React from 'react';

const PasswordField = ({ value, onChange }) => {
  return (
    <label>
      Password:
      <input
        type="password"
        value={value}
        required
        minLength={8}
        maxLength={25}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default PasswordField;
