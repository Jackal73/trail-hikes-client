import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Shawn Kebel',
      image: 'https://images.pexels.com/photos/1311523/pexels-photo-1311523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      hikes: 3
     }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
