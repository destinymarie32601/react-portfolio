import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import {About} from './components/About';
import Contact from './components/Contact';
import { Navigation} from './components/Navigation';
import Resume from './components/Resume';

//react scroll 

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Portfolio />
      <Contact />
      <Resume/>
      <Footer />
    </div>
  );
}

export default App;
