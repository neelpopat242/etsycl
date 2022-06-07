import './App.css';
import Footer from './templates/Footer';
import Header from './templates/Header';
import IntroFooter from './templates/IntroFooter';
import OurSelection from './templates/OurSelection';
import SpecialCategory from './templates/SpecialCategory';
import SubCategory from './templates/SubCategory';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubCategory/>
      <SpecialCategory/>
      <OurSelection/>
      <br/>
      <IntroFooter/>
      <Footer/>
    </div>
  );
}

export default App;
