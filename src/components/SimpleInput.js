// Using Ref or State depends on what you plan to do.
// If only interested once, when form is submitted, ref might be better
// For Instant validation, after every keystroke, State would do the trick.
// State is also good if we want to reset the entered input
import useInput from "../hooks/use-Input"

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } 
  = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return; // This return statement exits the code block and does not execute the code underneath
    }

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM. Not a very clean way of using React
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control"
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler} // onBlur means when the element loses focus
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler} // onBlur means when the element loses focus
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
