import React, { useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './UserDetails';
import EditUser from './EditUser';

function Members() {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userList, setUserList] = useState([
        { id: 1, employeeId: 'E001', username: 'Tanasiri.B', password: 'password123', status: true, position: 'Developer' },
        { id: 2, employeeId: 'E002', username: 'Nattapong.P', password: 'password123', status: false, position: 'Designer' },
        // สามารถเพิ่มสมาชิกเพิ่มเติมได้ที่นี่
    ]);

    const handleToggle = (user) => {
        const updatedUser = { ...user, status: !user.status };
        const updatedUserList = userList.map(u => (u.id === user.id ? updatedUser : u));
        setUserList(updatedUserList);
    };

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleOpenEditModal = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedUser(null);
    };

    const handleUpdateUser = (updatedUser) => {
        const updatedUserList = userList.map(user => (user.id === updatedUser.id ? updatedUser : user));
        setUserList(updatedUserList);
        handleCloseEditModal();
    };

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1>Members</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Member List</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{ width: '20%' }}>Employee ID</th>
                                        <th style={{ width: '30%' }}>Username</th>
                                        <th style={{ width: '20%' }} className="text-center">Status</th>
                                        <th style={{ width: '30%' }} className="text-center">Position</th> {/* เพิ่มคอลัมน์ตำแหน่ง */}
                                        <th style={{ width: '30%' }} className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.employeeId}</td>
                                            <td>{user.username}</td>
                                            <td className="project-state text-center">
                                                <button
                                                    className={`btn btn-sm ${user.status ? 'btn-success' : 'btn-danger'}`}
                                                    onClick={() => handleToggle(user)}
                                                >
                                                    {user.status ? 'On' : 'Off'}
                                                </button>
                                            </td>
                                            <td>{user.position}</td> {/* แสดงตำแหน่ง */}
                                            <td className="project-actions text-right">
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleOpenModal(user)}>
                                                        <i className="fas fa-folder"></i> View
                                                    </button>
                                                    <button className="btn btn-outline-info btn-sm" onClick={() => handleOpenEditModal(user)}>
                                                        <i className="fas fa-pencil-alt"></i> Edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {showModal && selectedUser && (
                <UserDetails user={selectedUser} onClose={handleCloseModal} />
            )}

            {showEditModal && selectedUser && (
                <EditUser user={selectedUser} onUpdate={handleUpdateUser} onClose={handleCloseEditModal} />
            )}
        </div>
    );
}

export default Members;