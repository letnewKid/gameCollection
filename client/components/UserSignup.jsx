import React from 'react';

export default function signupForm({ signUpHandler }) {
  function onclickHandler(e) {
    e.preventDefault();
    const username = document.querySelector('#signUpUser').value;
    const password = document.querySelector('#signUpPassword').value;
    const signUpData = {};
    signUpData.username = username;
    signUpData.password = password;
    signUpHandler(signUpData);
  }
  return (
    <form>
      <h2>Please SignUp</h2>
      <label>
        <b>Username</b>
      </label>
      <div>
        <input type="text" id="signUpUser" />
      </div>
      <br />
      <label>
        <b>Password</b>
      </label>
      <br />
      <input type="text" id="signUpPassword" />
      <br />
      <button className="submit" type="button" onClick={onclickHandler}>
        {' '}
        submit{' '}
      </button>
    </form>
  );
}
