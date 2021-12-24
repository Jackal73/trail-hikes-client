import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MAX, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import './NewHike.css';

const NewHike = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {

  }, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {

  }, []);

  return (
    <form className="hike-form">
      <Input
      id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}
      />
       <Input
       id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min 5 characters)."
        onInput={descriptionInputHandler}
      />
  </form>
  );
};

export default NewHike;