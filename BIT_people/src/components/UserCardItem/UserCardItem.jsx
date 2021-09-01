import React from 'react';
import './UserCardItem.css'

const UserCardItem=({
    imgOfUserLarge,
    firstName,
    email,
    dateOfBirth,
    index,
    gender
})=>{
    let day = new Date(dateOfBirth).getDate();
    let month = new Date(dateOfBirth).getMonth() + 1;
    let year = new Date(dateOfBirth).getFullYear();
    let dob = `${day}.${month}.${year}`;

    const emailArr = email.split("@");
    emailArr[0] = `${emailArr[0].slice(0, 3)}...`;
    return(
        <div className={`singleElUserCard ${(gender==="female")? "red" : ""}`}>
        <img src={imgOfUserLarge} alt="img of user"/>
        <p className="firstName">{firstName}</p>
        <div className="info">
            <p>email: {emailArr.join("@")}</p>
            <p>Birth date: {dob}</p>
        </div>
    </div>
    )
}


// export const UserCard = ({name, email, date, img}) => {
//     const emailArr = email.split("@");
//     emailArr[0] = `${emailArr[0].slice(0, 3)}...`;

//     return (
//         <div className = 'blogCard '>
//             <img src={img} alt="some" />
//             <h3>{name}</h3>
//             <p>{emailArr.join("@")}</p>
//             <p>{date}</p>
//         </div>
//     )
// };

export default UserCardItem;