import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ user, onClose }) => {

    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">User Details</h5>
                        {/* Removed the Close button */}
                    </div>
                    <div className="modal-body">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Status:</strong> {user.status ? 'Active' : 'Inactive'}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

UserDetails.propTypes = {
    user: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default UserDetails;