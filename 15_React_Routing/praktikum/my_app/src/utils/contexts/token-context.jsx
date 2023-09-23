import { createContext, useState, useMemo, useContext, useEffect } from "react";

const TokenContext = createContext("");

function TokenProvider({ children }) {
  const initialToken = localStorage.getItem("token") || "";
  const [token, setToken] = useState(initialToken);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const tokenContextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
}

function useToken() {
  const tokenContext = useContext(TokenContext);

  if (tokenContext === undefined) {
    console.log("ERROR, useToken must be used within TokenContext");
  }

  return tokenContext;
}

export { TokenProvider, useToken };
