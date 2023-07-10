import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
//import About from './components/About';
//import Contact from './components/Contact';
//import Resume from './components/Resume';
import './App.css';

function App() {
  const [selectedSection, setSelectedSection] = useState('about');

  const handleNavigationClick = (sectionId) => {
    setSelectedSection(sectionId);
  };
    

  return (
    <div className="App">
      <Header onNavigationClick = {handleNavigationClick} />
      {selectedSection === 'portfolio' && <Portfolio />}
      <Footer />
    </div>
  );
}

export default App;
