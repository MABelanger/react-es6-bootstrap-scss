import React from 'react';
import ReactDOM from 'react-dom';

// Import bootstrap and your main.scss
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import style from './scss/base.scss';

class World extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

ReactDOM.render(<World/>, document.getElementById('app'));
