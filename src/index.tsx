import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import {store} from '@store/.';

import { RouterProvider} from "react-router-dom";
import {router} from '@router';
import Loading from "@components/layout/Loading";

import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loading />} future={{ v7_startTransition: true }}/>
    </Provider>
  </React.StrictMode>
);

