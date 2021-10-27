import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './styles/App.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reportWebVitals from "./reportWebVitals";

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

reportWebVitals()