import { createContext, useContext, useState } from "react";
import textos from "../data/textos";
import { useTikTok } from "../hooks/useTikTok";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [idioma, setIdioma] = useState("es");

  const tikTok = useTikTok(textos, idioma);

  return (
    <AppContext.Provider
      value={{
        idioma,
        setIdioma,
        textos: textos[idioma],
        ...tikTok,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}