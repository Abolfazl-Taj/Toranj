import AOS from "aos";
import "aos/dist/aos.css";
import { useRoutes } from 'react-router-dom';
import './App.css';
import {default as  path} from './Assets/Routes';
import { createContext, useEffect, useState } from 'react';
const ThemeContext = createContext(null)
function App() {
  const Route = useRoutes(path)
  const [theme , setTheme] = useState("light")
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <ThemeContext.Provider  value={[theme , setTheme]} >
        {Route}
    </ThemeContext.Provider>

  ) 
}


export default App;
