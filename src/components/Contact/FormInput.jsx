import React, { useState } from 'react';
import '../Contact/style.css';

function FormInput(props) {
  const [focused, setFocused] = useState(false);

  const { errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div key={id}>
      <input
        className=" w-full border-[#443627] border rounded-xl focus:text-[#443627] bg-transparent py-4 px-6 text-black focus:outline-none"
        {...inputProps}
        required
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />

      <p className="hidden text-red-500 text-xs mt-1">{errorMessage}</p>
    </div>
  );
}

export default FormInput;
