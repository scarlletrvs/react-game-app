import React from 'react';
import { ContainerCardGames } from './styles';
import { Link } from 'react-router-dom';





function abbreviateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
}


export  interface ICard {
  id: number;
  title: string;
  thumbnail: string;
  genre: string;
  platform: string;
  release_date: string;
  freetogame_profile_url: string;
   game_url: string;
    developer: string;

  
}

const CardGames = ({ id, title, thumbnail, genre, platform, release_date ,  developer, freetogame_profile_url, game_url}: ICard) => {
  return (
   <a href={game_url}> 
      <ContainerCardGames>
        <div>
          <img src={thumbnail} alt={title} />
        </div>
        <div>
        <h1>{abbreviateText(title, 15)}</h1>
        <h3>{genre}</h3>
        <p>{platform}</p>
        <p>{release_date}</p>
        <h3>{developer}</h3>
        <a href={freetogame_profile_url}>Saiba mais!</a>
        </div>
      </ContainerCardGames>
      </a>
  );
};

export default CardGames;
