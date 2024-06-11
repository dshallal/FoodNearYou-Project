import './App.css';
import HeaderRest from '../components/HeaderRest'
import Header from '../components/Header';
import BodyPage2 from '../components/BodyPage2';

function App2() {
  return (
    <div className="container">
      <HeaderRest class1 = "buttons" class2 = "buttons" class3 = "buttons"  />
      <BodyPage2 />
    </div>
  );
}

export default App2;