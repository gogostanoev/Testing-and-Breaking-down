import React from 'react';

const EmailField = ({ value, onChange }) => {
  return (
    <label>
      Email:
      <input
        type="email"
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default EmailField;
