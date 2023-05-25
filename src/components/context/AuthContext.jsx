import { Navigate } from 'react-router-dom'
import {Auth} from '../../components/Auth/auth'

export const RequireAuth = ({children}) => {

    const useAuth = Auth()

    if (!useAuth.user){
        return <Navigate to="/zonelogin"/>
    }

    return children
}