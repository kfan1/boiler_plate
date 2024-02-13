import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMyState } from '../../store/slices/appSlice';
import { Button, Form } from 'react-bootstrap';

export default function RightSideNavBar() {
  const [newName, setNewName] = useState();
  const dispatch = useDispatch();
  const formInput = useRef('');

  return (
    <Form className='d-flex' role='search'>
      <Form.Control
        className='me-2'
        type='search'
        placeholder='change the name'
        // value={newName}
        ref={formInput}
        onChange={(e) => setNewName(e.target.value)}
      />
      <Button
        variant='outline-success'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          dispatch(setMyState(newName));
          formInput.current.value = '';
          // setNewName('');
        }}>
        Change
      </Button>
    </Form>
  );
}
