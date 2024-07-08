import { createContext, useContext, useState, useEffect } from "react";

const CountContext = createContext();

export default function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const count = localStorage.getItem("count");
    if (count) {
      setCount(parseInt(count));
    }
  }, []);

  return (
    <CountContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export const UserCount = () => {
  return useContext(CountContext);
};
