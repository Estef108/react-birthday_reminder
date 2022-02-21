import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';

const AuthRoute = ({component}) => {
    const {user} = useContext(UserContext);

    if(!component){
        throw new Error('Necesitas añadir una prop "component" con el siguiente formato <MiComoponente props />');
    };
    if(user){
        return component;
    } else {
        return <Navigate to='login' state={{prevRoute: window.location.pathname}}/>
    }
}

export default AuthRoute;