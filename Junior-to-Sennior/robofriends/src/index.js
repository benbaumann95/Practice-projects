import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main.js'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots'

ReactDOM.render(
                <div>
                  <Main robots={robots} />
                </div>
, document.getElementById('root'));
registerServiceWorker();
