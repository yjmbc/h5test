import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css'
// import A from './pages/a'
// import B  from './pages/b'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//     <React.StrictMode>
//         {/* <App /> */}
//     <A></A>
//     <B></B>
//     </React.StrictMode>,
// );

const renderElement = ({ default: App }) => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <App></App>,
    );
};

if (/iphone/i.test(window.navigator.userAgent)) {
    import('./App').then(renderElement);
} else {
    import('./pages/a').then(renderElement);
}
