import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

const App: FC = () => (
  <>
    <BrowserRouter>
      <Route
        render={(routeProps) => (
          <Routes
          // history={routeProps.history}
          // location={routeProps.location}
          // match={routeProps.match}
          />
        )}
      />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
