import useInput from "../hooks/use-Input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: nameInput,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: lastNameInput,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const {
    value: emailInput,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(isEmail);

  let formIsValid = false;

  if (nameInputIsValid && lastNameIsValid && emailIsValid){
    formIsValid=true;
  }
  
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    // if (!nameInputIsValid || !lastNameIsValid || !emailIsValid){
    //   return;
    // }

    console.log("Submitted!");
    console.log(nameInput,lastNameInput,emailInput)
    resetNameInput();
    resetLastName();
    resetEmailInput();
  }

  const nameClassHandler = nameInputHasError ? "form-control invalid" : "form-control"
  const lastNameClassHandler = lastNameHasError ? "form-control invalid" : "form-control"
  const emailClassHandler = emailHasError ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameClassHandler}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameInput}
          />
          {nameInputHasError && <p className="error-text">Name must not be empty!</p>}
        </div>
        <div className={lastNameClassHandler}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameInput}
          />
          {lastNameHasError && <p className="error-text">Last Name must not be empty!</p>}
        </div>
      </div>
      <div className={emailClassHandler}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailInput}
        />
        {emailHasError && <p className="error-text">Email must not be empty!</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
