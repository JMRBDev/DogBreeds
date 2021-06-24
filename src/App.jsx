import React from 'react';
import Theme from 'styles/theme';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import store from 'redux/store/store';
import Layout from 'layouts/Layout';
import ErrorNotification from 'components/atoms/errorNotification/ErrorNotification';
import HomePage from 'pages/HomePage';

const App = () => (
    <Provider store={store}>
        <HelmetProvider>
            <Theme>
                <Layout>
                    <ErrorNotification />
                    <HomePage />
                </Layout>
            </Theme>
        </HelmetProvider>
    </Provider>
);

export default App;
