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

    
    function searchFriends(person) {
     for(let i=0; i<friend.length; i++) {
         if(friend[i] === person) {
             return true;
         } else {
             return false;
         }
     }   
    }

    function searchBlock(person) {
        for(let i=0; i<block.length; i++) {
            if(block[i] === person) {
                return true;
            } else {
                return false;
            }
        }   
       }

    const addFriend = (person) => {
        if(searchFriends(person) === true) {
            alert("Already in Friend list")
        } else if (searchBlock(person) === true) {
            alert("User is in block list"); 
        } else {
            const newFriend = [...friend, person];
            setFriend(newFriend);  
        } 
    }

    const blockUser = (person) => {
        if(searchFriends(person) === true) {
            alert("User is in Friend list")
        } else if (searchBlock(person) === true) {
            alert("Already in block list"); 
        } else {
            const newBlock = [...block, person];
            setBlock(newBlock);  
        } 
    }
        

    return (
        <div className="container">
            <div className='users-container'> 
                {
                    user.map(user => <Users user = { user } addFriend = {addFriend} blockUser = {blockUser} > </Users>)
                }
            </div>

            <div className ='summary-container'>
            <ZoneInfo users = {users} friend = {friend} block = {block}></ZoneInfo>
            </div>
        </div>
    );
}

export default Content;