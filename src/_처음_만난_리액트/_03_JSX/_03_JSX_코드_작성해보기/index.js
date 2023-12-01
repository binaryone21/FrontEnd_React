import React from "react";
import ReactDOM from 'react-dom';
import '../../index.css';
import App from '../../App.css';
import reportWebVitals from "../../reportWebVitals";

import Library from './Library';

ReactDOM.render(
    <React.StrictMode>
        <Library />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in yuor app, pass a function
// to log result (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more : https://bit.ly/CRA-vitals
reportWebVitals();