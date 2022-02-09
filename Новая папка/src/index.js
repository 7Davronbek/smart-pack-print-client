import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import ClientsPage from './pages/ClientsPage';
import PortfolioPage from './pages/PortfolioPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/portfolio' component={PortfolioPage} />
      <Route path='/team' component={TeamPage} />
      <Route path='/clients' component={ClientsPage} />
      <Route path='/services' component={ServicesPage} />
    </Switch>
    <Footer />
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
