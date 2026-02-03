import { defaultTheme, ThemeProvider, Toastr } from '@sparrowengg/twigs-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        ...defaultTheme,
        fonts: {
          body: "'DM sans', sans-serif",
          heading: "'DM sans', sans-serif",
        },
      }}
    >
      <Toastr duration={1000} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
//home-feature
//home--components

//home--services
//home--state
//home--helpers
//home--constants
//home--types
// service-api-calls

//routes in pages and paths are present in pages.
//only routes in pages.
//pages can also be in root.
//common-inside src

//checkout-feature
//cart-feature
