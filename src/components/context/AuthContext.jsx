import { Navigate } from 'react-router-dom'
import {Auth} from '../../components/Auth/auth'

export const RequireAuth = ({children}) => {

    const useAuth = Auth()

    
    return useAuth ? children : <Navigate to="/login" />;
  };


