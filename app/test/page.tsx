'use client';

import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, setFocus } = useForm();
  const firstNameRef = useRef();
  const onSubmit = (data: any) => console.log(data);

  setFocus('firtName');
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input
        name="firstName"
        ref={(e) => {
          register(e);
          firstNameRef.current = e; // you can still assign to ref
        }}
      />
      <input
        name="lastName"
        ref={(e) => {
          // register's first argument is ref, and second is validation rules
          register(e, { required: true });
        }}
      />

      <button>Submit</button> */}
    </form>
  );
}
