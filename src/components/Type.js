import { useState, useEffect } from 'react';
import { Box, TextField } from '@mui/material';

function Type(props) {
    let [value, setValue] = useState('');

    useEffect(() => {
        setValue('');
        
    }, [props.reloadFlag])

    const changeText = (text) => {
        setValue(text);
        props.changeText(text);
    }

    return (
        <Box>
            <TextField
                id="standard-basic"
                variant="standard"
                color="primary"
                value={value}
                onChange={(e) => changeText(e.target.value)}
                inputRef={input => input && input.focus()}
                sx={{ width: '280px', marginLeft: '30px' }}
            />
        </Box>
    );
}

export default Type;
