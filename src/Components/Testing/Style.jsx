import { Button, Typography} from '@mui/material';
import React, { useState } from 'react';
import { Add, Settings } from "@mui/icons-material"
import SetStyle from './SetStyle';

function Style(props) {
        const [Count, setCount] = useState(0);
        const [Text, setText] = useState("");

    const setVal = () =>
    (setCount(
        Count + 1
        )
    )
    const setZero = () =>
    {
        setCount(2)
    }
    const giveAlert = () =>
    {
        setText(
             "hi, welcome"
            )
    } 
  
    return (
        <div>
            
    <Button onClick={()=> setVal()} variant="text" size='small'>Click me</Button>
    <Button  startIcon={<Settings />} variant="contained" size='small'>{Count}</Button>
    <Button onClick={()=> setZero()} variant="outlined" size='small'>Change to Zero</Button>   
    <Typography variant="h3">Responsive h3 {Text}</Typography>
    <Button variant='contained'onClick={() => giveAlert()}>
        testing {Count}
    </Button>
    <SetStyle variant='red'/>
    </div>
    );
}

export default Style;