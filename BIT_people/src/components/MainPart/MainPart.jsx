import React, { useEffect } from "react";
import UserListItem from "../UserListItem/UserListItem";
import UserCardItem from "../UserCardItem/UserCardItem";
import { UserService } from "../services/UserService";
import "./MainPart.css";
import { Loader } from "../Loader/Loader";

export const MainPart = ({
  switchState,
  searchTerm,
  users,
  setUsers,
  setIsLoading,
  isLoading
}) => {
  
  useEffect(() => {
    if(window.localStorage.getItem('areYoufirstTimeHere')==null){ //prvi put
        UserService().then((users) => {
          setUsers(users);
          setIsLoading(false);

        });
    }else if(window.localStorage.getItem('areYoufirstTimeHere')==="beenHereBefore"){ //neki drugi
        /////ovde stari niz i jos jedan uslov da je samo ya prvi ulazk, kad se refreshuje ide normlno
        UserService().then((users) => {
          let parsedArray;
          let savedArray=window.localStorage.getItem('array');
          if (savedArray && savedArray.length) {
            parsedArray = JSON.parse(savedArray);
          }

          setUsers(parsedArray);
          setIsLoading(false);

        });
    }
    
    window.localStorage.setItem('areYoufirstTimeHere', 'beenHereBefore');
  }, [setUsers, setIsLoading]);

  if (isLoading) return <Loader />;

  let array = users.filter((elem) => {
    if (searchTerm === "") {
      return elem;
    } else if (elem.firstName.toLowerCase().includes(searchTerm.toLowerCase())  ||
    elem.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return elem;
    }

    
    return null;
  });
  
  window.localStorage.setItem('array', JSON.stringify(array));
  




  
  var component;
  var countFemale=0;
  var countMale=0;
  
  if(array.length) {
    component = array.map((user, index) => {

        (user.gender==="female")?(countFemale++):(countMale++)
        
        return switchState ? (
          <UserListItem 
            imgOfUser={user.imgOfUser}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            dateOfBirth={user.dateOfBirth}
            key={index}
            gender={user.gender}
            
            />
            ) : (
              <UserCardItem
              imgOfUserLarge={user.imgOfUserLarge}
              firstName={user.firstName}
              email={user.email}
              dateOfBirth={user.dateOfBirth}
              key={index}
              gender={user.gender}
          />
        );
      });
  }else{
    component = 
    <div className="noMatchFound">
        <span className="material-icons">sentiment_dissatisfied</span>
        <p>We couldn't find any people matching your search</p>
    </div>
  }

  return (
    
    <div className="containerMain">
        <div className="countingGender">female: {countFemale} male: {countMale}</div>

        {component}
    </div>
  );
};
