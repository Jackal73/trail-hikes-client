import React from 'react';import { useParams} from 'react-router-dom';

import HikeList from '../components/HikeList';


const DUMMY_HIKES = [
    {
      id: 'p1',
      title: 'Python Minion Trail',
      description: 'Beautiful stone bridge halfway through hike!',
      imageUrl: 'https://images.pexels.com/photos/10401037/pexels-photo-10401037.jpeg?cs=srgb&dl=pexels-veronika-bykovich-10401037.jpg&fm=jpg',
      address: 'Rolla, Mo',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
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

const UserHikes = () => {
  const userId = useParams().userId;
  const loadedHikes = DUMMY_HIKES.filter(hike => hike.creator === userId);
    return <HikeList items={loadedHikes} />;
};

export default UserHikes;