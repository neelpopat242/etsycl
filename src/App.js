import './App.css';
import Header from './templates/Header';
import SpecialCategory from './templates/SpecialCategory';
import SubCategory from './templates/SubCategory';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubCategory/>
      <SpecialCategory/>
    </div>
  );
}

export default App;
