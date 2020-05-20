import React from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {

    const user = props.user;

    return (
        <div className = "user-info">
            <div className = "image">
                <img className = "profile-image" src={user.image} alt=""/>
            </div>
            <div className = "information">
                <div className="general-info">
                    <h3>Name: {user.first_name} {user.last_name}</h3>
                    <p>Gender: {user.gender}</p>
                    <button onClick = {() => props.addFriend(props.user)} className="btn btn-add">Add Friend</button>
                    <button onClick ={() => props.blockUser(props.user)} className="btn btn-block">Block User</button>
                </div>

                <div className="contact-info">
                    <h5><FontAwesomeIcon icon={faEnvelope} className='faIcons' /> {user.email}</h5>
                    <h5><FontAwesomeIcon icon={faPhone} className='faIcons'/> {user.phone}</h5>
                </div>
            </div>
        </div>
    );
};

export default Users;