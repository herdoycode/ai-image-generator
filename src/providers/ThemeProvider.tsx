import { ReactNode, useEffect } from "react";
import { useThemeStore } from "../store";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const mode = useThemeStore((s) => s.mode);
  useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("data-theme", mode);
  }, [mode]);

  return <>{children}</>;
};

export default ThemeProvider;
