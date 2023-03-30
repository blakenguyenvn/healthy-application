import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { store } from 'app/store';
import router from 'routes/router';
import OrangeHealthTheme from 'theme/orangeHealth';
import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <ThemeProvider theme={OrangeHealthTheme}>
          <Header />
          <RouterProvider router={router}></RouterProvider>
          <Footer />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
};

export default App;
