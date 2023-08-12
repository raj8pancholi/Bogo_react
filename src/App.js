// import logo from './logo.svg';
import './App.css';


// import react component
// import header and footer
// import Header from './partials/header/Header';
// import Footer from './partials/footer/Footer';

// import css part
import "./assets/css/style.css";
import "./assets/css/responsive.css";

// import js part
// import './assets/js/main.js';

// import pages part
// import HomePage from './pages/website/HomePage';
// import PricingPage from './pages/website/PricingPage';


// import navigation .
import Navigation from './routes/Navigation';

function App() {
  return (
    <div className="App">
      
        {/* <Header /> */}
        <Navigation />
        {/* <Footer /> */}
    </div>
  );
}

export default App;
