import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.tsx';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.ts';
import ThemeProvider from './providers/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
    <Toaster />
  </React.StrictMode>
);
