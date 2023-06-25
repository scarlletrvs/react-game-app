
import React from 'react';
import { ContainerNavbar} from './styles';
import Image from '../image';


const Navbar: React.FC =() => {
    return(
  
<ContainerNavbar>
    <div>
    <h2>
        Bem-vindo ao Mundo dos Games!
    </h2>
    <p>Aqui você fica por dentro de todas as novidades do mundo do game.</p>
    </div>
<Image/>
</ContainerNavbar>
    );

};
export default Navbar;