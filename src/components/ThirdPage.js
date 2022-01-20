import React,{useContext} from 'react';
import {multiStepContext} from '../StepContext';
import { Button } from '@material-ui/core';
export default function ThirdPage(){
  const {setPage,userData,setUserData} = useContext(multiStepContext)

  return(
    <div>
      <label>Course Fees:</label>
      <input type="text" placeholder="1000rs"/>
      <Button variant="contained" color="primary">Submit</Button>
    </div>
  )
}