import { BsSun } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";
import "./ThemeSwitch.scss";
import { useThemeStore } from "../store";

const ThemeSwitch = () => {
  const toggleTheme = useThemeStore((s) => s.toggleMode);
  const mode = useThemeStore((s) => s.mode);
  return (
    <div className="theme-switch" onClick={toggleTheme}>
      {mode === "dark" ? <BsSun /> : <RiMoonClearLine />}
    </div>
  );
};

export default ThemeSwitch;
