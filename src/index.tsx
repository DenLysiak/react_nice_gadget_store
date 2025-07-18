/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
