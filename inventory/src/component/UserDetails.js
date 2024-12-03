// UserDetails.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function UserDetails({ user, onClose }) {
    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Name: </strong>{user.name}</p>
                <p><strong>Status: </strong>{user.status}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserDetails;