import { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { IoReload } from 'react-icons/io5';
import Letter from './Letter';

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
    let [wordsArr, setWordsArr] = useState([]);

    const renderWordsComponent = () => {
        return (
            <Box>
                {wordsArr.map((word) => (
                    <Letter
                        letter={word.value}
                        color={word.color}
                        id={word.id}
                    />
                ))}
            </Box>
        );
    };

    useEffect(() => {
        setWordsArr(props.wordsArr);
    }, [props.wordsArr]);

    // Re-render words & reset all the word to gray color
    useEffect(() => {
        resetColor();
    }, [props.reloadFlag]);

    useEffect(() => {
        changeColor();
    }, [props.text]);

    // Check input and words and change color
    const changeColor = () => {
        const idx = props.text.length - 1;
        const words = props.wordsArr;
        let arr = props.wordsArr;

        for (let i = lastIndex + 1; i < idx + 1; i++) {
            arr[i].color =
                props.text[i] === words[i].value ? '#FFFA8A' : '#F94400';
            arr[i].id = props.text[i] === words[i].value ? 'pop1' : 'pop2';
        }
        for (let i = idx + 1; i < lastIndex + 1; i++) {
            arr[i].color = 'gray';
            arr[i].id = '';
        }
        setWordsArr(arr);
        setLastIndex(idx);
    };

    const resetColor = () => {
        let arr = props.wordsArr;
        for (let i = 0; i < props.wordsArr.length; i++) {
            arr[i].color = 'gray';
            arr[i].id = '';
        }
        setWordsArr(arr);
        setIndex(0);
        setLastIndex(-1);
    };

    return (
        <Box sx={styles}>
            <IconButton onClick={(e) => props.reload()} color="primary">
                <IoReload />
            </IconButton>
            {renderWordsComponent()}
        </Box>
    );
}

export default MainText;
