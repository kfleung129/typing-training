import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const styles = {
    display: 'flexWrap',
    marginTop: '20px',
    marginBottom: '40px',
    height: '400px',
    padding: '30px',
    color: 'gray',
    fontSize: '1.5rem',
    wordWrap: 'break-word',
    whiteSpace: 'none',
};

function MainText(props) {
    let [same, setSame] = useState(false);
    let [index, setIndex] = useState(0);
    const prevText = useRef('');

    useEffect(() => {
        const idx = props.text.length - 1;
        let isEmpty;
        if (!props.text[idx] && !props.words[idx]) {
            resetColor();
            return;
        }
        if (prevText.current.length > idx + 1) {
            isEmpty = props.text[idx] == ' ' && props.words[idx] == ' ';
            changeColor(
                props.text[idx] === props.words[idx],
                false,
                isEmpty,
                idx
            );
            prevText.current = props.text;
            return;
        }
        isEmpty = props.text[idx] == ' ' && props.words[idx] == ' ';
        changeColor(props.text[idx] === props.words[idx], true, isEmpty, idx);
        prevText.current = props.text;
    }, [props.text]);

    const resetColor = () => {
        let letters = document.getElementsByClassName('letter');
        for (let i = 0; i < letters.length; i++) {
            letters[i].style.color = 'gray';
        }
        setIndex(0);
    };

    const changeColor = (flag, isNext, isEmpty, idx) => {
        setSame(flag);
        if (!isNext) {
            document.getElementsByClassName('letter')[idx + 1].style.color =
                'gray';
        } else {
            document.getElementsByClassName('letter')[idx].style.color = flag
                ? 'yellow'
                : 'red';
        }
    };

    return (
        <Box sx={styles}>
            {props.wordsComponent}
            <Box>&nbsp;</Box>
            <Box>{same ? 'True' : 'False'}</Box>
            <Box>&nbsp;</Box>
            <Box>{props.text}</Box>
        </Box>
    );
}

export default MainText;
