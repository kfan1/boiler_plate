import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMyState } from '../../store/slices/appSlice';
import { Button, Form } from 'react-bootstrap';

export default function RightSideNavBar() {
  const [newName, setNewName] = useState();
  // can also use 'useRef()' to reference the form input
  // const formInput = useRef('');

  const dispatch = useDispatch();

  return (
    <Form className='d-flex' role='search'>
      <Form.Control
        className='me-2'
        type='search'
        placeholder='change the name'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        // ref={formInput}
      />
      <Button
        variant='outline-success'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          dispatch(setMyState(newName));
          setNewName('');
          // dispatch(setMyState(formInput.current.value));
          // formInput.current.value = '';
        }}>
        Change
      </Button>
    </Form>
  );
}
