import Header from './component/Header'
import Home from './component/Home'
import About from  './component/About'
import Projects from './component/Projects'
import Timeline from './component/Timeline'

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Header/>
      <About/>
      <Projects />
      <Timeline/>
    </div>
  );
}

export default App;
