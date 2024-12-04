import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function EditUser({ user, onUpdate, onClose }) {
    const [employeeId, setEmployeeId] = useState(user.employeeId || '');
    const [username, setUsername] = useState(user.username || '');
    const [password, setPassword] = useState(user.password || '');
    const [status, setStatus] = useState(user.status || false);
    const [position, setPosition] = useState(user.position || '');

    const handleSubmit = () => {
        const updatedUser = { ...user, employeeId, username, password, status, position };
        onUpdate(updatedUser);
    };

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label>Employee ID</label>
                    <input
                        type="text"
                        className="form-control"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="text" // เปลี่ยนเป็น type="text" เพื่อให้แสดงรหัสผ่านตลอด
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select
                        className="form-control"
                        value={status ? 'Active' : 'Inactive'}
                        onChange={(e) => setStatus(e.target.value === 'Active')}
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Position</label>
                    <input
                        type="text"
                        className="form-control"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditUser;