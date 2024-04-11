"use client";

import { createContext, useContext, useState } from "react";

type ContextType = {
  currentMode: Boolean,
  setCurrentMode: Function
}

const ContextDefaultValues: ContextType = {
  currentMode: false,
  setCurrentMode: () => { }
}

const AppContext = createContext<ContextType>(ContextDefaultValues);


export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [currentMode, setCurrentMode] = useState<Boolean>(true);

  const value = {
    currentMode,
    setCurrentMode
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}