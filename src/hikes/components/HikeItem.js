import React from 'react';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import './HikeItem.css';


const HikeItem = props => {
  return (
    <li className="hike-item">
      <Card className="hike-item__content">
        <div className="hike-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="hike-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="hike-item__actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default HikeItem;