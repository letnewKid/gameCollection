import React from 'react';

export default function signupForm(props) {
  return (
    <form>
      <h2>Please SignUp</h2>
      <lable>
        <b>Username</b>
      </lable>
      <div>
        <input type="text" />
      </div>
      <br />
      <lable>
        <b>Password</b>
      </lable>
      <br />
      <input type="text" />
      <br />
      <button className="submit" type="button">
        {' '}
        submit{' '}
      </button>
    </form>
  );
}
