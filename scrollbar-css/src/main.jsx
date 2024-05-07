import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleBar forceVisible="y" autoHide={false} style={{ maxHeight: '100vh' }}>
      <App />
      <App />
      <App />
    </SimpleBar>
  </React.StrictMode>,
)
