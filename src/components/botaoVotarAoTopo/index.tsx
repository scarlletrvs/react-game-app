import React, { useState, useEffect } from 'react';
import { ContainerBotaoVoltarTopo } from './styles';
import {ArrowFatUp} from 'phosphor-react';
const BotaoVoltarTopo = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ContainerBotaoVoltarTopo>
      {showButton && (
        <button onClick={handleScrollToTop}>
          <ArrowFatUp size={30} color='#fff'  />
         
        </button>
      )}
    </ContainerBotaoVoltarTopo>
  );
};

export default BotaoVoltarTopo;
