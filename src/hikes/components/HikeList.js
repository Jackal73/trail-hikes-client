import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import HikeItem from './HikeItem';
import './HikeList.css';

const HikeList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No hikes found. Maybe create one?</h2>
          <button>Share Hike</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(hike => (
        <HikeItem
          key={hike.id}
          id={hike.id}
          image={hike.imageUrl}
          title={hike.title}
          description={hike.description}
          address={hike.address}
          creatorId={hike.creator}
          coordinates={hike.location}
        />
      ))}
    </ul>
  );
};

export default HikeList;