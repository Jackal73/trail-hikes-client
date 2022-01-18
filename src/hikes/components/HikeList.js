import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import HikeItem from './HikeItem';
import Button from '../../shared/components/FormElements/Button';
import './HikeList.css';

const HikeList = props => {
  if (props.items.length === 0) {
    return (
      <div className="hike-list center">
        <Card>
          <h2>No hikes found. Maybe create one?</h2>
          <Button to="/hikes/new">Share Hike</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="hike-list">
      {props.items.map(hike => (
        <HikeItem
          key={hike.id}
          id={hike.id}
          image={hike.image}
          title={hike.title}
          description={hike.description}
          address={hike.address}
          creatorId={hike.creator}
          coordinates={hike.location}
          onDelete={props.onDeleteHike}
        />
      ))}
    </ul>
  );
};

export default HikeList;