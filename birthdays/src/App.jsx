import React from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header/Header';

import { UserProvider } from './contexts/UserContext';
import routes from './config/routes';


const App = () => {


  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
        {routes.map( (route) => (
          <Route key={route.path} path={route.path} element= {<React.Suspense fallback={<>Loading...</>}>{route.element} </React.Suspense>} />
        ))}
        </Routes>
      </UserProvider>
    </Router>

  );
}

export default App;
