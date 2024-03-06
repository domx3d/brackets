import { HashRouter  as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/home/Hero'
import About from './components/About'
import Tournament from './components/tournament/Tournament'



function App() {

  return (
    <>
      <div className='w-fit md:w-full h-fit overflow-auto lg:overflow-x-hidden'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/'
              element={
                <Hero />
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
