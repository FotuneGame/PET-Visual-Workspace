import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider} from "react-router-dom";
import {router} from '@router';
import Loading from "@components/layout/Loading";

import { Provider } from 'react-redux';
import {store} from '@store/.';

import './i18n';
import ThemeProvider from '@providers/ThemeProvider';
import AuthProvider from './providers/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} fallbackElement={<Loading />} future={{ v7_startTransition: true }}/>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

