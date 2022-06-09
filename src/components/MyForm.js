import React, { useState } from 'react'
import useHook from '../hooks/myHook';

export default function MyForm() {
  // const [enteredName, setEnteredName] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    changeValue: changeEnteredName,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: resetName
  } = useHook(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    changeValue: changeEnteredEmail,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
    reset: resetEmail
  } = useHook(value => value.includes('@'));

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      console.log("ERROR");
      return;
    }

    resetName();
    resetEmail();
  }

  return (
    <form onSubmit={submitHandler}>
      <div >
        <label htmlFor='name'>First Name</label>
        <input
          type='text'
          id='name'
          onChange={changeEnteredName}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && <p className='error-text'>Error enter a name</p>}
      </div>
      <div >
        <label htmlFor='email'>Enter Email</label>
        <input
          type='email'
          id='email'
          onChange={changeEnteredEmail}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className='error-text'>Error Email required</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
