// React library
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globalStyle.scss';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker'
import App from './views/App';

// Redux library
import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux';

const renderApp = () => {
    ReactDOM.render(
        <Provider store={reduxStore}>
            <App persistor={persistor}/>
        </Provider>,
        document.getElementById('root')
    );
};

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
