
import { ContainerBotaoDropDown } from './styles';



import React, { useState } from 'react';

interface DropdownButtonProps {
  genres: string[];
  onSelectGenre: (genre: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ genres, onSelectGenre }) => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = event.target.value;
    setSelectedGenre(selectedGenre);
    onSelectGenre(selectedGenre);
  };

  return (
    <div className="dropdown">
      <label htmlFor="genre-select">Selecione um gênero:</label>
      <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Selecione...</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownButton;
