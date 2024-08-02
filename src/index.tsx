import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider} from "react-router-dom";
import {router} from '@router';
import {Loading} from "@ui";

import { Provider } from 'react-redux';
import {store} from '@store/.';

import './i18n';
import {ThemeProvider,AuthProvider} from '@providers';

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

