import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './HikeForm.css';

const DUMMY_HIKES = [
  {
    id: 'p1',
    title: 'Python Minion Trail',
    description: 'Beautiful stone bridge halfway through hike!',
    imageUrl: 'https://images.pexels.com/photos/10401037/pexels-photo-10401037.jpeg?cs=srgb&dl=pexels-veronika-bykovich-10401037.jpg&fm=jpg',
    address: 'Rolla, Mo',
    location: {
      lat: 37.951424,
      lng: -91.768959
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Salt Lick Trail',
    description: 'I think the dogs had more fun climbing around than we did!',
    imageUrl: 'https://images.pexels.com/photos/7348515/pexels-photo-7348515.jpeg?cs=srgb&dl=pexels-rodnae-productions-7348515.jpg&fm=jpg',
    address: 'Columbia, Il',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UpdateHike = () => {
  const [isLoading, setIsLoading] = useState(true);
  const hikeId = useParams().hikeId;



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

  const identifiedHike = DUMMY_HIKES.find(p => p.id === hikeId);


  useEffect(() => {
    if (identifiedHike) {

    setFormData({
      title: {
        value: identifiedHike.title,
        isValid: true
      },
      description: {
        value: identifiedHike.description,
        isValid: true
      }
    },
    true
    );
  }
    setIsLoading(false);
  }, [setFormData, identifiedHike]);

  const hikeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  if (!identifiedHike) {
    return (
      <div className="center">
        <Card>
        <h2>Could not find hike!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading . . .</h2>
      </div>
    );
  }

  return (
    <form className="hike-form" onSubmit={hikeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE HIKE
      </Button>
    </form>
  );
};

export default UpdateHike;