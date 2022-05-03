import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// The main file selects the root div in the index.html file and executes the render method.
// The render method then creates the component appointed below

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
