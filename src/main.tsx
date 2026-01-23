import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { defaultTheme, ThemeProvider, Toastr } from '@sparrowengg/twigs-react';


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
      <Toastr duration={10000} />
      <App />

    </ThemeProvider>
  </React.StrictMode>,
);
