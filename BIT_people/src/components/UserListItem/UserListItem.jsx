import React from 'react';
import './UserListItem.css'

const UserListItem=({
    imgOfUser,
    firstName,
    lastName,
    email,
    dateOfBirth,
    index,
    gender
})=>{
    let day = new Date(dateOfBirth).getDate();
    let month = new Date(dateOfBirth).getMonth() + 1;
    let year = new Date(dateOfBirth).getFullYear();
    let dob = `${day}-${month}-${year}`;
    return(
        <div className={`singleElUserList ${(gender==="female")? "red" : ""}`} >
            <img src={imgOfUser} alt="img of user"/>
            <div className="info">
                <h3>name: {`${firstName} ${lastName}`}</h3>
                <h3>email: <span className="material-icons">email</span>{email}</h3>
                <h3>date of birth: <span className="material-icons">cake</span>{dob}</h3>
            </div>
        </div>
    )
}
export default UserListItem;