import React,{useContext} from "react";
import "./style.css";
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import {multiStepContext} from  './StepContext';


 

export default function App() {
const {currentPage, finalData} = useContext(multiStepContext);

  function showStep(step){
    switch (step){
      case 1:
        return <FirstPage/>
     case 2:
       return <SecondPage/> 
     case 3:
       return <ThirdPage/>  
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{color:'red',textDecoration:"underline"}}>Personal Info</h3>
        <div className='center-stepper'>
        <Stepper style={{width:"48%"}} 
        activeStep={currentPage-1} 
        orientation="horizontal">
        <Step>
              <StepLabel> </StepLabel>
            </Step>
            <Step>
              <StepLabel> </StepLabel>
            </Step>
            <Step>
              <StepLabel> </StepLabel>
            </Step>
      </Stepper>
      </div>
      {showStep(currentPage)}
   
      </header>
       </div>
  );
}

