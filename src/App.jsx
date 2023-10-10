import { SearchForm } from './components/SearchForm/SearchForm'
import { Characters } from './components/Characters/Characters'
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle'

function App() {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Characters />
    </main>
  )
}

export default App
