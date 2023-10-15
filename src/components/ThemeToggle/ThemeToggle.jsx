import { useGlobalContext } from "../context/context"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'


import './ThemeToggle.css'
import { Link } from "react-router-dom"

export const ThemeToggle = () => {

  const { isDarkMode, toggleDarkTheme } = useGlobalContext()

  return (
    <section className="toggle-theme">
      <Link to="/" className="logo">
        <div>
          <span>r</span>
          <span>i</span>
          <span>c</span>
          <span>k</span>
          <span>m</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>y</span>
        </div>
      </Link>
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
