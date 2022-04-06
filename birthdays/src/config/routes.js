import React from "react";
// import { UserProvider } from "../contexts/UserContext";

const Home = React.lazy( () => import('../pages/Home/Home.jsx'));
const People = React.lazy( () => import('../pages/People/People'));
const NotFound = React.lazy( () => import('../components/NotFound/NotFound'));
const LoginForm = React.lazy( () => import('../pages/LoginForm/LoginForm'));
const RegisterForm = React.lazy( () => import('../pages/RegisterForm/RegisterForm'));
const AuthRoute = React.lazy( () => import('../pages/AuthRoute/AuthRoute.jsx'));
const Profile = React.lazy( () => import('../pages/Profile/Profile.jsx'))


const routes = [
{
    path:"/", 
    element: <Home />
},{
    path: "register", 
    element: <RegisterForm />
},
{
    path: "login",
    element: <LoginForm />
},

{
    path: "people",
    element: <People/>
},
{
    path: "profile",
    element: <AuthRoute component={<Profile/>}/>
},
{
    path: "*",
    element: <NotFound/>
}

]

export default routes;