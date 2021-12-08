import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyle, { AppWrapper, AppMain } from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <AppWrapper>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Header />
            <AppMain>
              <Routes />
            </AppMain>
            <GlobalStyle />
            <ToastContainer
              autoClose={5000}
              className="toast-container"
              theme="colored"
            />
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </AppWrapper>
  );
}

export default App;
