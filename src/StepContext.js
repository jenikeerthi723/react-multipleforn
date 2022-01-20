import React,{useState} from 'react';
import App from './App';

export const multiStepContext = React.createContext();
const StepContext= () => {
  const [currentPage, setPage] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  return(
    <div>
      <multiStepContext.Provider value={{currentPage,setPage,userData,setUserData,finalData,setFinalData}}>
        <App/>
       </multiStepContext.Provider>
    </div>
  )
}
export default StepContext;