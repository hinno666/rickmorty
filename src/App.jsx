import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { InnerCharacter } from './components/pages/InnerCharacter'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className='wrapper'>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<InnerCharacter />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
