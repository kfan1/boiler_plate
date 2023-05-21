import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMyState } from '../../store/slices/appSlice';

export default function RightSideNavBar() {
  const [newName, setNewName] = useState();
  const dispatch = useDispatch();

  return (
    <form className='d-flex' role='search'>
      <input
        className='form-control me-2'
        type='search'
        placeholder='change the name'
        aria-label='Search'
        onChange={(e) => setNewName(e.target.value)}
      />
      <button
        className='btn btn-outline-success'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          dispatch(setMyState(newName));
        }}>
        Change
      </button>
    </form>
  );
}
