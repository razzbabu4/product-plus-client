import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const userInfo = {
        name: 'tareq'
    }
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;