import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Tournament from './components/Tournament'



function App() {

  return (
    <>
      <div className='w-fit md:w-full h-fit overflow-auto lg:overflow-x-hidden'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/'
              element={
                <Home />
              }/>
            <Route exact path='/tournament'
            element={
              <Tournament />
            }/>
            <Route exact path='/about'
            element={
              <About />
            }/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
