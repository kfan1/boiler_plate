import React from 'react';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../reducers/reducer';

export default function signUpPage() {
  const dispatch = useDispatch();

  const login = () => {
    fetch('/server')
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch(loggedIn());
          login();
        }}>
        Signup!
      </button>
    </div>
  );
}

// add authentication before switching state
