import { useState } from 'react';

export function useFormInput(initialState) {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const resetValue = () => setValue(initialState);
  return [
    {
      value,
      onChange: handleChange,
    },
    resetValue,
  ];
}

export function useCustomHook(state) {
  return state;
}
