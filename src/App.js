import './App.css';
import "./component/Banner";
import Banner from './component/Banner';
import About from './component/About';
import Projects from './component/Projects';
import WipersProject from './component/WipersProject';
import KiddProject from './component/KiddProject';

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Projects>
        <WipersProject />
        <KiddProject />
      </Projects>
    </div>
  );
}

export default App;
