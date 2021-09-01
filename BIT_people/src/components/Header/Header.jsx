import React from 'react';
import './Header.css';
import { UserService } from '../services/UserService';
import { HashRouter as Router, Link } from 'react-router-dom';

const Header=({setSwitch, switchState, setUsers, setIsLoading,hideButtons})=>{
    const onClick = () => setSwitch(!switchState);

    function refresh(){

        let counter=0;
        let inMinutes=0;
        let counterNode;
        var writeThis;
        counterNode=document.querySelector(".counterDiv");


        setInterval(function counting(){

            counter++;
            
            if(counter%60 === 0){
                
                inMinutes++;
                writeThis="last update was: " + inMinutes + "min ago";
                
            }else if(counter<60){
                writeThis="last update was few seconds ago";
            }

            window.localStorage.setItem('write', writeThis);
            
        }
        ,1000)
        var lastUpdate=window.localStorage.getItem('write')
        counterNode.innerHTML=lastUpdate;
       

        setIsLoading(true);
        UserService().then((users) => {
          setUsers(users);
          setIsLoading(false);
        });
    };
    
    
    
    return(
        // <nav >
        //     <h1>React Users</h1>

        //     <button className="switchButton" onClick={onClick} >
        //          {switchState ? <span className="material-icons">view_module</span> : <span className="material-icons">view_list</span>}
        //     </button>
        //     <button className="refreshButton" onClick={refresh} ><span className="material-icons">refresh</span></button>
        // </nav>
        <nav >
            <Router>
                <h1><Link to="/">Bit People</Link></h1>
            </Router>
<div className={hideButtons ? "hidden" : "shown"}  >
            <Router>
                <button><Link to="/about">About</Link></button>
            </Router>
            <button className="switchButton" onClick={onClick} >
                {switchState ? <span class="material-icons">view_module</span> : <span className="material-icons">view_list</span>}
            </button>
            <button id="refresh" className="refreshButton" onClick={refresh} ><span className="material-icons">refresh</span></button>
            {/* <button className="switchButton" onClick={onClick} >{ switchState ? <img alt="dugme" src='./gridDugme.png'/> : <img alt="dugme" src='./listaDugme.png' /> }</button>
           <button className="refreshButton" onClick={refresh} >REFRESH</button> */}
</div>
        </nav>
    )
}

export default Header;