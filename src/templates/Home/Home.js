import { useEffect } from 'react';

import { HeroHome } from '../../components/HeroHome/Hero';
import { PhraseHome } from '../../components/PhraseHome/PhraseHome';
import { Services } from '../../components/ServicesHome/Services';
import './index.css';


function Home() {
  
  return (
    <div className="App">
      {/* HERO */}
      <HeroHome></HeroHome>
      <PhraseHome></PhraseHome>
      <Services></Services>
      
    </div>
  );
}

export default Home;
