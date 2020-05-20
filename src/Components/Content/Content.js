import React from 'react';
import Users from '../Users/Users';
import users from '../../fakeData/users'
import { useState } from 'react';
import './Content.css'
import ZoneInfo from '../ZoneInfo/ZoneInfo';


const Content = () => {
    const allUsers = users;

    const [user, setuser] = useState(allUsers);
    const [friend, setFriend] = useState([]);
    const [block, setBlock] = useState([]);

    const addFriend = (person) => {
        const searchFriend = friend.find(friend => friend = person);
        const searchBlock = block.find(friend => friend = person);
        if(person === searchFriend) {
            alert("This person is already included in the friend list")
        } else if (person === searchBlock) {
            let confirmation = confirm("You have blocked this user previously. Do you want to unblock?");
            if (confirmation === true) {
                const newFriend = [...friend, person];
                setFriend(newFriend);
            } else {
                alert("The user is kept blocked");
            }
        }
    }

    const blockUser = (person) => {
        console.log("User blocked", person);
    }
    return (
        <div className="container">
            <div className='users-container'> 
                {
                    user.map(user => <Users user = { user } addFriend = { addFriend } blockUser = {blockUser}> </Users>)
                }
            </div>

            <div className ='summary-container'>
                <ZoneInfo friend = {friend} block = {block}></ZoneInfo>
            </div>
        </div>
    );
};

export default Content;