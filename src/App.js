import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Education/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
