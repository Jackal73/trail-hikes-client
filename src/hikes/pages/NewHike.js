import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewHike.css';

const NewHike = () => {
  return (
    <form className="hike-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title."
      />
  </form>
  );
};

export default NewHike;