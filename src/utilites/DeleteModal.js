import React from 'react';

function DeleteModal(props) {
  const { show, onClose, onDelete } = props;

  return (
    <div className={`delete-modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <p>Are you sure you want to delete this item?</p>
        <div className="button-container">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="delete-button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;