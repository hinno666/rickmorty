import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Home, InnerCharacter } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/character/:id',
    element: <InnerCharacter />,
  }
])


function App() {
  return (
    <div className='wrapper'>
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  )
}

export default App
