import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// At the top of your server.js
process.env.PWD = process.cwd()

// Then
app.use(express.static(process.env.PWD + '/public'));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

