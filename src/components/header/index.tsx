import React, { useContext } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import DropdownButton from '../BotaoDropDown';

interface Props {
  toggleTheme(): void;
  genres: string[];
  onSelectGenre(genre: string): void;
}

const Header: React.FC<Props> = ({ toggleTheme, genres, onSelectGenre }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>

        
      <h1>World of Games</h1>
    
      <Switch
        onChange={toggleTheme}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        width={24}
        height={12}
        handleDiameter={15}
        onColor="#a0a0a0"
        offColor="#000"
      />
    </Container>
  );
};

export default Header;
