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
      <lable>
        <b>Username</b>
      </lable>
      <div>
        <input type="text" id="loginUser"/>
      </div>
      <br />
      <lable>
        <b>Password</b>
      </lable>
      <br />
      <input type="text" id="loginPassword"/>
      <br />
      <button className="submit" type="button" onClick={onclickHandler}> submit </button>
    </form>
  );
}
