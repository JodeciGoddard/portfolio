import './App.css';
import "./component/Banner";
import Banner from './component/Banner';
import About from './component/About';
import Projects from './component/Projects';
import WipersProject from './component/WipersProject';
import KiddProject from './component/KiddProject';
import RacqProject from './component/RacqProject';
import BaderProject from './component/BaderProject';

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Projects>
        <WipersProject />
        <KiddProject />
        <RacqProject />
        <BaderProject />
      </Projects>
    </div>
  );
}

export default App;
