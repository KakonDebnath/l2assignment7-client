import { createContext, useState } from 'react';

export type TThemeContext = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};
export const ThemeContext = createContext<TThemeContext | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
