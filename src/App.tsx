import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Routesapp from "./routes/routes";
import Header from "./components/header";
import api from "./services/api";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";
import { StyledComponent } from "styled-components";
import GlobalStyle from "./styles/global";
const App = () => {
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    async function loadGenres() {
      try {
        const response = await api.get("/genres");
        const genresData = response.data.map(
          (genre: { name: string }) => genre.name
        );
        setGenres(genresData);
      } catch (error) {
        console.log("Error fetching genres:", error);
      }
    }

    loadGenres();
  }, []);

  const handleSelectGenre = (genre: string) => {
    // Aqui você pode fazer o tratamento necessário quando um gênero é selecionado
    console.log("Selected genre:", genre);
  };

  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : light;
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme.title === "light" ? dark : light;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        toggleTheme={toggleTheme}
        genres={genres}
        onSelectGenre={handleSelectGenre}
      />
      <Routesapp />
    </ThemeProvider>
  );
};

export default App;
