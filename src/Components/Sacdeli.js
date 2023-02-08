import React, { useState } from 'react';

const Sacdeli = ({ label, name, required, onChange }) => {
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;

    if (required && !value) {
      setError(`${label} is required`);
      return;
    }

    if (value.length < 2) {
      setError(`${label} can only contain 2 characters`);
      return;
    }

    if (/[^ა-ჰ ]/g.test(value)) {
      setError(`${label} can only contain Georgian characters`);
      return;
    }

    setError(null);
    onChange(name, value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        onChange={handleChange}
        minLength={2}
        required={required}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Sacdeli;