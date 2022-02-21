import './App.scss';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import People from './pages/People/People';
import NotFound from './components/NotFound/NotFound';
import LoginForm from './pages/LoginForm/LoginForm';
import Profile from './pages/Profile/Profile';
import RegisterForm from './pages/RegisterForm/RegisterForm';
import AuthRoute from './pages/AuthRoute.jsx/AuthRoute';
import { UserProvider } from './contexts/UserContext';

const App = () => {


  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="register" element={<RegisterForm />}/>
          <Route path="login" element={<LoginForm />}/>
          <Route path="profile" element={<AuthRoute component={<Profile/>}/>}/>
          <Route path="people" element={<AuthRoute component={<People/>}/>}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </UserProvider>
    </Router>

  );
}

export default App;
