import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import './App.css';
import { BrowserRouter } from 'react-router-dom';
;

// Create main root to a simple tag
createRoot(document.getElementById('root')).render(
    <BrowserRouter><App/></BrowserRouter>
);
