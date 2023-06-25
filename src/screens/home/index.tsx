import React, { useState, useEffect } from 'react';
import CustomAlert from '../CustomAlert';
import CardGames, { ICard } from '../../components/cardGames';
import Navbar from '../../components/Navbar';
import api from '../../services/api';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import { ContainerHome } from './styles';
import Carregando from '../../components/carregando';
import BotaoVoltarTopo from '../../components/botaoVotarAoTopo';
import axios, { AxiosError } from 'axios';

const Home = () => {
  const [games, setGames] = useState<ICard[]>([]);
  const [filteredGames, setFilteredGames] = useState<ICard[]>([]);
  const [busca, setBusca] = useState('');
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortType, setSortType] = useState<'title' | 'date'>('title');
  const timeLoad = 5000;

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  useEffect(() => {
    async function loadGames() {
      try {
        const response = await api.get<ICard[]>('data/', { timeout: timeLoad });
        setGames(response.data);
        setFilteredGames(response.data);
        setLoading(false);

        const genres = response.data.map((game) => game.genre) as string[];
        const uniqueGenres = Array.from(new Set(genres));
        setCategories(uniqueGenres);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.code === 'ECONNABORTED') {
            setShowAlert(true);
            setAlertMessage(`O servidor demorou para responder, tente mais tarde ${error}`);
            setAlertType('error');
          }
          if (error.response && error.response.status) {
            const responseError = error as { response: { status: number } };
            if (
              [404, 500, 502, 503, 504, 506, 508, 509].includes(
                responseError.response.status
              )
            ) {
              setShowAlert(true);
              setAlertMessage('O servidor fahou em responder, tente recarregar a página');
              setAlertType('error');
            } else {
              setShowAlert(true);
              setAlertMessage(' O servidor não conseguirá responder por agora, tente voltar novamente mais tarde, Erro: ' + responseError.response.status);
              setAlertType('error');
            }
          }
        }
      }
    }

    loadGames();
  }, []);

  useEffect(() => {
    const filtered = games.filter((game) =>
      game.title.toLowerCase().includes(busca.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [busca, games]);

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.title === 'light' ? dark : light));
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = event.target.value;
    setSelectedGenre(selectedGenre);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const [order, type] = value.split('-');
    setSortOrder(order as 'asc' | 'desc');
    setSortType(type as 'title' | 'date');
  };

  useEffect(() => {
    const filtered = games
      .filter((game) => selectedGenre === '' || game.genre === selectedGenre)
      .sort((a, b) => {
        if (sortType === 'title') {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          if (sortOrder === 'asc') {
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
          } else {
            if (titleA > titleB) return -1;
            if (titleA < titleB) return 1;
            return 0;
          }
        } else {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          if (sortOrder === 'asc') {
            return dateA.getTime() - dateB.getTime();
          } else {
            return dateB.getTime() - dateA.getTime();
          }
        }
      });
    setFilteredGames(filtered);
  }, [games, selectedGenre, sortOrder, sortType]);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <ContainerHome>
      {showAlert && (
        <CustomAlert
          type={alertType}
          message={alertMessage}
          onClose={handleCloseAlert}
        />
      )}

      <div className="Home">
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">Selecione uma categoria</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Busque por um jogo"
          onChange={(event) => setBusca(event.target.value)}
        />

        <select
          id="sort-select"
          value={`${sortOrder}-${sortType}`}
          onChange={handleSortChange}
        >
          <option value="asc-title">Ordenar A-Z</option>
          <option value="desc-title">Ordenar Z-A</option>
          <option value="asc-date">Mais atuais</option>
          <option value="desc-date">Mais antigos</option>
        </select>
      </div>
      <Navbar />
      <BotaoVoltarTopo />

      {loading ? (
        <Carregando />
      ) : (
        filteredGames.map((game) => (
          <CardGames
            key={game.id}
            id={game.id}
            title={game.title}
            thumbnail={game.thumbnail}
            platform={game.platform}
            genre={game.genre}
            release_date={game.release_date}
            developer={game.developer}
            freetogame_profile_url={game.freetogame_profile_url}
            game_url={game.game_url}
          />
        ))
      )}
    </ContainerHome>
  );
};

export default Home;
