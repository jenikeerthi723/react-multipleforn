import React,{useContext} from 'react';
import {multiStepContext} from '../StepContext';
import { Button } from '@material-ui/core';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
export default function FirstPage(){
  const {setPage,userData,setUserData} = useContext(multiStepContext)
  return(
    
     <div>
             Name:
             <input type="text" name ="name" placeholder="Name"/> 
             <br/>
             Email:
             <input type="text" name ="email" placeholder="Email"/> 
             <br/>
             Address:
             <input type="text" name ="address" placeholder="Address"/> 
             <br/>
             pincode:
             <input type="zip" name="zipcode" placeholder="pincode"/>
             <br/>
             choose city:
             <select>
           
            <option>chennai</option>
            <option>Madurai</option>
            <option>Erode</option>
            <option>Trichy</option>
            <option>Salem</option>
             </select>
             <br/>
             choose country:
             <select>
           
            <option>INDIA</option>
            <option> CHINA</option>
            <option>CANADA</option>
            <option>AUSTRALIA</option>
            <option>JAPAN</option>
             </select>
             <br/>
           
             <label>Gender:</label> 
             Male:
             <input type="Radio" name="male"/>
           
             Female:
            <input type="Radio" name="male"/>
            <br/>{' '}
            <br/>
            <Button variant="contained"
            onClick={() => setPage(2)}
            color="Blue"  >Next</Button> {' '}
            
           
         
          <br/>

    </div>
  )
}