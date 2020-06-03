import React from 'react';
import {render} from 'react-dom';
import {hot} from 'react-hot-loader';
import {Home} from './home';
import './index.css';

const HotComponent = hot(module)(Home);

render(<HotComponent />, document.getElementById('app'));
