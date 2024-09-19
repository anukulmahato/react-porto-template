
import { RouterProvider } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home/Home'
import router from './route/router'

function App() {

  return (
    <>
      {/* <Home /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
