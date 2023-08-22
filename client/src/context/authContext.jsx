import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";
const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [User,setUser] = useState(JSON.parse(localStorage.getItem("user") || null));

    const Login = async(Inputs) => {
        const Res = await axios.post("/api/auth/login",Inputs);
        setUser(Res.data);
        return Res;
    }
    const Logout = async() => {
        const Res = await axios.post("/api/auth/logout");
        setUser(null);
        return Res;
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(User))
    }, [User])

    return(
        <AuthContext.Provider value={{User,Login,Logout}}>{children}</AuthContext.Provider>
    )
}

export const AuthContextState = () => {
    return useContext(AuthContext)
}

export default AuthProvider;