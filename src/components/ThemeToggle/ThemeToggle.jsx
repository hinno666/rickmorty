import { useGlobalContext } from "../context/context"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'


import './ThemeToggle.css'

export const ThemeToggle = () => {

  const { isDarkMode, toggleDarkTheme } = useGlobalContext()

  return (
    <section className="toggle-theme">
      <div className="logo">
        <h1>
          <span>r</span>
          <span>i</span>
          <span>c</span>
          <span>k</span>
          <span>m</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>y</span>
        </h1>
      </div>
      <button className="toggle-theme-btn" onClick={toggleDarkTheme}>
        {isDarkMode ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}
