import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './main.scss';
import './assets/images/favicon.png';
import store from './store';
import { Spinner, ErrorBoundary } from './components/commons';

const App = lazy(() => import('./containers/App'));

AOS.init();
// Using ReactDOM.render(...) when running on dev mode
// Otherwise using ReactDOM.hydrate(...) for SSR
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
