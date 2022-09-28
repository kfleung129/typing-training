import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { NUM_OF_WORD } from './setting/setting';
// Layout
import CommonLayout from './layout/CommonLayout';
// Components
import Header from './components/Header';
import Type from './components/Type';
import MainText from './components/MainText';
import Letter from './components/Letter';

function App() {
    let [text, setText] = useState('');
    let [wordsArr, setWordsArr] = useState([]);
    let [reloadFlag, setReload] = useState(false);

    useEffect(() => {
        let wordsArr = [];
        for (let i = 0; i < NUM_OF_WORD; i++) {
            let arr = [];
            let word = faker.word.noun() + ' ';
            wordsArr = [
                ...wordsArr,
                ...[...word].map((letter) => ({ value: letter })),
            ];
        }
        setWordsArr(wordsArr);
    }, [reloadFlag]);

    function changeText(text) {
        setText(text);
    }

    function reload() {
        setReload(!reloadFlag);
    }

    return (
        <CommonLayout>
            <Header />
            <MainText
                text={text}
                wordsArr={wordsArr}
                reload={reload}
                reloadFlag={reloadFlag}
            />
            <Type changeText={changeText} reloadFlag={reloadFlag} />
        </CommonLayout>
    );
}

export default App;
