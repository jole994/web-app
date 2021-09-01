import {Fragment,useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {MainPart} from './components/MainPart/MainPart';
import {Search} from './components/Search/Search';


function App() {


  const [switchState,setSwitch]=useState(false);
  const[searchTerm,setSearchTerm]=useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  


  
  return (
    <Fragment>
      <Header setSwitch={setSwitch}
              switchState={switchState}
              setUsers={setUsers}
              setIsLoading={setIsLoading} 
              />

      { (!isLoading) ? <Search setSearchTerm={setSearchTerm} /> : "" }  

      <MainPart switchState={switchState}
                searchTerm={searchTerm}
                setUsers={setUsers}
                users={users}
                setIsLoading={setIsLoading} 
                isLoading={isLoading}

                />
      <Footer />
    </Fragment>
  );
}

export default App;
