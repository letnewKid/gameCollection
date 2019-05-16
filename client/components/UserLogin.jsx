/* eslint-disable prettier/prettier */
import React from 'react';


export default function loginForm({loginHandler}) {
    function onclickHandler(e){
        e.preventDefault();
    const username = document.querySelector('#loginUser').value;
    const password = document.querySelector('#loginPassword').value;
    const loginData = {};
    loginData.username = username;
    loginData.password = password;
    loginHandler(loginData);
    }
    return (
    <form>
        <h2>Please Login</h2>
      <label>
        <b>Username</b>
      </label>
      <div>
        <input type="text" id="loginUser"/>
      </div>
      <br />
      <label>
        <b>Password</b>
      </label>
      <br />
      <input type="text" id="loginPassword"/>
      <br />
      <button className="submit" type="button" onClick={onclickHandler}> submit </button>
    </form>
  );
}
