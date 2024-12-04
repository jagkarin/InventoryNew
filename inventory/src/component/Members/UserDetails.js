import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function UserDetails({ user, onClose }) {
    const [showPassword, setShowPassword] = useState(false); // สถานะการแสดงซ่อนรหัสผ่าน

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Employee Information</h5>
                <div className="mb-3">
                    <strong>Employee ID:</strong>
                    <span className="ms-2">{user.employeeId}</span>
                </div>
                <div className="mb-3">
                    <strong>Username:</strong>
                    <span className="ms-2">{user.username}</span>
                </div>
                <div className="mb-3">
                    <strong>Password:</strong>
                    <span className="ms-2">{showPassword ? user.password : '******'}</span>
                    <Button 
                        variant="link" 
                        className="ms-2" 
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? '🙈 Hide' : '👁️ Show'} {/* ปรับสัญลักษณ์และข้อความ */}
                    </Button>
                </div>
                <div className="mb-3">
                    <strong>Status:</strong>
                    <span className="ms-2">{user.status ? 'Active' : 'Inactive'}</span>
                </div>
                <div className="mb-3">
                    <strong>Position:</strong>
                    <span className="ms-2">{user.position}</span>
                </div>
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