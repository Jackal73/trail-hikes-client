import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { AuthContext } from '../../shared/context/auth-context';
import './HikeForm.css';

const UpdateHike = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedHike, setLoadedHike] = useState();

  const hikeId = useParams().hikeId;
  const history = useHistory();

  const [formState, inputHandler, setFormData] =  useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
  }, false
  );

  useEffect(() => {
    const fetchHike = async () => {
      try {
      const responseData = await sendRequest(
        `http://localhost:5000/api/hikes/${hikeId}`
      );
      setLoadedHike(responseData.hike);
      setFormData(
        {
          title: {
            value: responseData.hike.title,
            isValid: true
          },
          description: {
            value: responseData.hike.description,
            isValid: true
          }
        },
        true
        );


    } catch (err) {}
  };
    fetchHike();
  }, [sendRequest, hikeId, setFormData]);

  const hikeUpdateSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/hikes/${hikeId}`,
        'PATCH',
        JSON.stringify({
      title: formState.inputs.title.value,
      description: formState.inputs.description.value
    }),
    {
      'Content-Type': 'application/json'
    }
      );
      history.push('/' + auth.userId + '/hikes');
    } catch (err) {};
    };



  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedHike && !error) {
    return (
      <div className="center">
        <Card>
        <h2>Could not find hike!</h2>
        </Card>
      </div>
    );
  }



  return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    {!isLoading && loadedHike && <form className="hike-form" onSubmit={hikeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={loadedHike.title}
        initialValid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={loadedHike.description}
        initialValid={true}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE HIKE
      </Button>
    </form>}
    </React.Fragment>
  );

};

export default UpdateHike;