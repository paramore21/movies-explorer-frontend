import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import Promo from '../Promo/Promo';
import Portfolio from '../Portfolio/Portfolio';
import Header from "../Header/Header";

function Main(){
  return (
    <>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  )
}
export default Main;