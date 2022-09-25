import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
// Layout
import CommonLayout from './layout/CommonLayout';
// Components
import Header from './components/Header';
import Type from './components/Type';
import MainText from './components/MainText';

const NUM_OF_WORD = 50;

function App() {
    let [text, setText] = useState('');
    let [words, setWords] = useState('');
    let [wordsComponent, setWordsComponent] = useState([]);

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
    }, []);

    function changeText(text) {
        setText(text);
    }
    return (
        <CommonLayout>
            <Header />
            <MainText
                text={text}
                words={words}
                wordsComponent={wordsComponent}
            />
            <Type changeText={changeText} />
        </CommonLayout>
    );
}

export default App;
