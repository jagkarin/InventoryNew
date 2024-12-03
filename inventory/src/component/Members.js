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
        { id: 1, name: 'Tanasiri Benajareporn', status: 'Active' },
    ]);

    const handleToggle = () => {
        alert("Toggle status!");
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
        handleCloseEditModal(); // ปิด modal หลังจากอัพเดท
    };

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>สมาชิก</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">ระบบคลังสินค้า</a></li>
                                <li className="breadcrumb-item active">สมาชิก</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Members</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{ width: '5%' }}>No</th>
                                        <th style={{ width: '50%' }}>Name</th>
                                        <th style={{ width: '20%' }} className="text-center">Status</th>
                                        <th style={{ width: '25%' }} className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map((user, index) => (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <a>{user.name}</a><br />
                                            </td>
                                            <td className="project-state text-center">
                                                <button className="btn btn-sm btn-success" onClick={handleToggle}>On</button>
                                                <button className="btn btn-sm btn-danger" onClick={handleToggle}>Off</button>
                                            </td>
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