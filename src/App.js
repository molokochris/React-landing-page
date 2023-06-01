import Logo from './components/Logo';
import './App.css';
import Menu from './components/Menu';
import Account from './components/Account';
import Products from './components/Products';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Sandwich from './components/Sandwich';
// import SideMenu from './components/SideMenu';

function App() {
  
  return (
    <div className="App">
    {/* <SideMenu /> */}
      <div className="head">
        <Sandwich />
        <Logo />
        <Menu />
        <Account />
      </div>
      <main>
        <div className='products-container'>
          <Products />
        </div>
        <div className='others-container'>
          <Blog />
          <div className='more-info'>
            <About />
            <Contact />
          </div>
        </div>
      </main>
      <footer>
        Moloko Chris Poopedi &copy;
      </footer>
    </div>
  );
}

export default App;