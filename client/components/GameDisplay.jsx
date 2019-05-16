import React, { Component } from 'react';
// This component that gets diplayed from my the information that is in it

export default function gameEntry({ name, console, condition, Qty, comment }) {
  return (
    <div className="gameEntry">
      <h1>{name}</h1>
      <p>
        {console}
        <br />
        {condition}
        <br />
        {Qty}
        <br />
        {comment}
      </p>
    </div>
  );
}
