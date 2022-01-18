import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import HikeList from '../components/HikeList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useHttpClient } from '../../shared/hooks/http-hook';

const UserHikes = () => {
  const [loadedHikes, setLoadedHikes] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchHikes = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/api/hikes/user/${userId}`);
        setLoadedHikes(responseData.hikes);
      } catch (err) {}
    };
    fetchHikes();
  }, [sendRequest, userId]);

  const hikeDeletedHandler = (deletedHikeId) => {
    setLoadedHikes(prevHikes => prevHikes.filter(hike => hike.id !== deletedHikeId)
    );
  };


    return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedHikes && <HikeList items={loadedHikes} onDeleteHike={hikeDeletedHandler} />}
    </React.Fragment>
    );
};

export default UserHikes;