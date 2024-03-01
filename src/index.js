import React from 'react';
import ReactDOM from 'react-dom';
// import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Body from './Styles/Body.css';


ReactDOM.render(
    <>
        {/* <Navbar title='TextUtils' /> */}
        <div className="container">
            <Textform />
        </div>

    </>,
    document.getElementById('root')
);
