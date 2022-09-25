import { useState } from 'react';
import { TextField } from '@mui/material';

function Type(props) {
    return (
        <TextField
            id="standard-basic"
            variant="standard secondary"
            variant="standard"
            color="primary"
            onChange={(e) => props.changeText(e.target.value)}
            focused
        />
    );
}

export default Type;
