import React, { useContext } from 'react';
import { multiStepContext } from '../StepContext';
import { Button } from '@material-ui/core';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
export default function SecondPage() {
  const { setPage, userData, setUserData } = useContext(multiStepContext);
  return (
    <div className="personal-info-container">
      <label>Choose your Fav course:</label> <br />
      <label>JAVA</label>
      <input type="Radio" value="JAVA" checked /> <br />
      PYTHON:
      <input type="Radio" name="PYTHON" /> <br />
      HTML:
      <input type="Radio" name="HTML" /> <br />
      ASP:
      <input type="Radio" name="ASP" /> <br />
      REACT:
      <input type="Radio" name="REACT" /> <br />
      CSS:
      <input type="Radio" name="CSS" /> <br /> 
      <Button variant="contained" onClick={() => setPage(2)} color="Blue">
        Back
      </Button>{' '}
      <Button variant="contained" onClick={() => setPage(3)} color="Blue">
        Next
      </Button>{' '}
    </div>
  );
}
