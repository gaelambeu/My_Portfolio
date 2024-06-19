import { BrowserRouter } from "react-router-dom"
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
} from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
          <div>
            <About />
            <Experience />
            <Tech />
            <Works />  
            <Feedbacks />  
            <div className="relative z-0">
              <Contact />  
              <StarsCanvas />   
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
