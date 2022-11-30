// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore';
import App from './component/App';
import { fetchGreeting } from "./redux/reducer";
const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchGreeting());
root.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
       </Provider>
    </BrowserRouter>
);
