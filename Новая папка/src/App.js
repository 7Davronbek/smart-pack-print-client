import React from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Advantage from './components/Advantage';
import Benefit from './components/Benefit';
import Team from './components/Team';
import Partners from './components/Partners';
import Portfolio from './components/Portfolio';

const App = () => {
  return <>
    <Header />
    <Info />
    <Advantage/>
    <Portfolio/>
    <Benefit/>
    <Team/>
    <Partners/>
  </>;
};

export default App;
