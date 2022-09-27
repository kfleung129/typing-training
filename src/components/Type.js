import { useState } from 'react';
import { Box, TextField } from '@mui/material';

function Type(props) {
    return (
        <Box>
            <TextField
                id="standard-basic"
                variant="standard"
                color="primary"
                onChange={(e) => props.changeText(e.target.value)}
                inputRef={input => input && input.focus()}
                sx={{ width: '280px', marginLeft: '30px' }}
            />
        </Box>
    );
}

export default Type;
