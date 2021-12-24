import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import './NewHike.css';

const NewHike = () => {
  return (
    <form className="hike-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
      />
  </form>
  );
};

export default NewHike;