import React, { useState, useEffect } from 'react';
import '../Styles/Button.css';
import '../Styles/textform.css';

export default function () {
    const [text, setText] = useState("");

    const [typingSpeed, setTypingSpeed] = useState(0);
    const [startTime, setStartTime] = useState(null);

    useEffect(() => {
        if (startTime) {
            const timer = setInterval(() => {
                const elapsedTimeInSeconds = (Date.now() - startTime) / 1000;
                const speed = (text.split(/\s+/).length / elapsedTimeInSeconds) * 60; // words per minute
                setTypingSpeed(speed);
            }, 1000);
    
            return () => clearInterval(timer);
        }
    }, [startTime, text]);
    

    const UpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const LowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const CapitalizeFirstLetter = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }

    const ReverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
    }


    const ShuffleText = () => {
        let words = text.split(/\s+/).filter(word => word !== '');
        for (let i = words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]];
        }
        setText(words.join(' '));
    }

    const Delete = () => {
        let newText = '';
        setText(newText)
    }

    const handleonChange = (event) => {
        if (!startTime) {
            setStartTime(Date.now());
            
        }
        setText(event.target.value);
    }

    return (
        <>
            <br />
            
            <div id="container">
                <div className="mb-3 my-5" id='Text'>
                    <textarea className="form-control" placeholder='Enter text here!' value={text} onChange={handleonChange} id="MyText" rows="10" spellCheck="false"></textarea>
                </div>
                <div className='buttons my-2'>
                    <button className="button-30" onClick={UpperCase}>UpperCase</button>
                    <button className="button-30" onClick={LowerCase}>LowerCase</button>
                    <button className="button-30" onClick={CapitalizeFirstLetter}>Capital</button>
                    <button className="button-30" onClick={ReverseText}>Reverse</button>
                    <button className="button-30" onClick={ShuffleText}>Suffle</button>
                    <button className="button-30" onClick={Delete}>Delete</button>
                </div>
            </div>

            <div className="Summary my-5">
                <div className="info">
                    <p>Words = {(text.match(/\b\w+\b/g) || []).length} <br />  Length = {text.length - text.split(" ").length + 1} <br /> Sentence = {text.split(".").length - 1} </p>
                    <p>{typingSpeed.toFixed(0)} words/min </p>
                </div>
                <div className="detail">
                    <h2> &#128071; Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
