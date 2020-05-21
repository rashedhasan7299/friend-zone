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
    const [salary, setSalary] = useState([]);
    
    function searchFriends(person) {
        const index = friend.indexOf(person)
        if (index > -1) {
        return true;
        }
        else {
        return false;
        }
        }
        function searchBlock(person) {
        const index = block.indexOf(person)
        if (index > -1) {
        return true;
        }
        else {
        return false;
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
            let newSalary = []
            newFriend.map((friend) => newSalary.push(parseInt(friend.annual_salary)));
            let allSalary = 0;
            newSalary.map((salary) => allSalary + salary);
            setSalary(allSalary);
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
            <ZoneInfo users = {users} friend = {friend} block = {block} salary = {salary}></ZoneInfo>
            </div>
        </div>
    );
}

export default Content;