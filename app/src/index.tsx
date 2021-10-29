// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// Component
import MunityProviders from 'munityapps/providers';
import Router from 'munityapps/router';

// Configuration
import reportWebVitals from './reportWebVitals';

// Style
import 'munityapps/styles.scss';

ReactDOM.render(
    <MunityProviders>
        <React.StrictMode>
            <Router>
		{ /* Your route here... */ }
            </Router>
        </React.StrictMode>
    </MunityProviders>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
