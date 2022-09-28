import { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { IoReload } from 'react-icons/io5';

import '../styles/animation.css';

const styles = {
    display: 'flexWrap',
    marginTop: '50px',
    height: '400px',
    padding: '30px',
    color: 'gray',
    fontSize: '1.5rem',
    position: 'relative',
};

function MainText(props) {
    let [index, setIndex] = useState(0);
    let [lastIndex, setLastIndex] = useState(-1);

    useEffect(() => {
        reload();

    }, [props.reloadFlag]);

    useEffect(() => {
        const idx = props.text.length - 1;
        changeColor(idx);
        console.log('text render');

    }, [props.text]);

    const changeColor = (idx) => {
        for (let i = lastIndex + 1; i < idx + 1; i++) {
            document.getElementsByClassName('letter')[i].id = props.text[i] === props.words[i] ? 'pop1' : 'pop2';
            document.getElementsByClassName('letter')[i].style.color = props.text[i] === props.words[i] ? '#FFFA8A' : '#F94400';
        }
        for (let i = idx + 1; i < lastIndex + 1; i++) {
            document.getElementsByClassName('letter')[i].style.color = 'gray';
            document.getElementsByClassName('letter')[i].id = '';
        }
        setLastIndex(idx);
    };

    const reload = () => {
        for (let i = 0; i < props.words.length; i++) {
            document.getElementsByClassName('letter')[i].style.color = 'gray';
            document.getElementsByClassName('letter')[i].id = '';
        }
        setIndex(0);
        setLastIndex(-1);
    }

    return (
        <Box sx={styles}>
            <IconButton onClick={(e) => props.reload()} color="primary">
                <IoReload/>
            </IconButton>
            <Box>
                {props.wordsComponent}
            </Box>
        </Box>
    );
}

export default MainText;