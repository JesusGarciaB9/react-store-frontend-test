import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import reportWebVitals from './reportWebVitals';
//routers 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/Routes';
//redux 
import { Provider } from 'react-redux';
import store, { saveState } from './store'


store.subscribe(() => {
  saveState(store.getState());
});


const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >

      <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
