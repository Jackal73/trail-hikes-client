import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './HikeForm.css';

const NewHike = () => {
  const auth = useContext(AuthContext);
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    },
   false
  );

  const history = useHistory();

  const hikeSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        'http://localhost:5000/api/hikes',
        'POST',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          address: formState.inputs.address.value,
          creator: auth.userId
        }),
      { 'Content-Type': 'application/json'}
      );
      history.push('/');
    } catch (err) {}
  };

  return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    <form className="hike-form" onSubmit={hikeSubmitHandler}>
      {isLoading && <LoadingSpinner asOverlay />}
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD HIKE
      </Button>
  </form>
  </React.Fragment>
  );
};

export default NewHike;