import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { NUM_OF_WORD } from './setting/setting';
// Layout
import CommonLayout from './layout/CommonLayout';
// Components
import Header from './components/Header';
import Type from './components/Type';
import MainText from './components/MainText';

function App() {
    let [text, setText] = useState('');
    let [words, setWords] = useState('');
    let [wordsComponent, setWordsComponent] = useState([]);
    let [reloadFlag, setReload] = useState(false);
    
    useEffect(() => {
        let wordsComponent = [];
        let words = '';
        for (let i = 0; i < NUM_OF_WORD; i++) {
            const word = faker.word.noun();
            const idx = 0;
            words += word + ' ';
            wordsComponent.push(
                <>
                    <span className="word">
                        {[...word, ' '].map((letter, index) => (
                            <span className={'letter'}>{letter}</span>
                        ))}
                    </span>
                </>
            );
        }
        setWords(words);
        setWordsComponent(wordsComponent);

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
                words={words}
                wordsComponent={wordsComponent}
                reload={reload}
                reloadFlag={reloadFlag}
            />
            <Type 
                changeText={changeText}
                reloadFlag={reloadFlag}
            />
        </CommonLayout>
    );
}

export default App;
