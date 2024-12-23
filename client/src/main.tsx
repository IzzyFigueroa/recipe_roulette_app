import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store/index.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <App />
            </StoreProvider>
        </BrowserRouter>
    </StrictMode>
)
