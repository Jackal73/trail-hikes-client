import React, { useContext, useState } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import Map from '../../shared/components/UIElements/Map';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/context/auth-context';
import './HikeItem.css';


const HikeItem = props => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log('DELETING . . .');
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="hike-item__modal-content"
        footerClass="hike-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="hike-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
          </React.Fragment>
        }>
        <p>Do you want to delete this hike? Please note it cannot be undone thereafter.</p>
      </Modal>
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
          <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>

          {auth.isLoggedIn && (
            <Button to={`/hikes/${props.id}`}>EDIT</Button>
          )}
          {auth.isLoggedIn && (
            <Button danger onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          )}
        </div>
      </Card>
    </li>
    </React.Fragment>
  );
};

export default HikeItem;