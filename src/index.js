import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {getMountnode} from "./utils"

const MOUNT_NODE=getMountnode()


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ,
  MOUNT_NODE
 
);


reportWebVitals();
