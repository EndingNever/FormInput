import { useState } from 'react';

const useHook = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const changeValue = (event) => {
    setEnteredValue(event.target.value);
  }

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  }


  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    changeValue,
    inputBlurHandler,
    hasError,
    reset
  }
};
export default useHook