import { createContext, useContext, useReducer } from "react";
import { usersReducer } from "../reducers/usersReducer";

const usersInitialValue = {};
export const AuthContext = createContext(usersInitialValue);
export const AuthProvider = ({ children }) => {
  const [userDetails, usersDispatchFn] = useReducer(
    usersReducer,
    usersInitialValue
  );

  return (
    <AuthContext.Provider value={{ userDetails, usersDispatchFn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
