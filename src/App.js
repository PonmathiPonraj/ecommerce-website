import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainHeader from './Links/MainHeader';
import HomePage from './Pages/HomePage';
import StorePage from './Pages/StorePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProductDetail from './Product/ProductDetail';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <MainHeader />
        <main>
          <Route path='/' exact><HomePage/></Route>
          <Route path="/home" component={HomePage} exact />
          <Route path="/store" component={StorePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login"><LoginPage/></Route>
          <Route path="/contact" component={ContactPage} />
          <Route path="/product/:productId" component={ProductDetail} /> {/* Dynamic route */}
        </main>
      </div>
    </Router>
  );
};

export default App;