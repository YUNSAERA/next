"use client";

import React from "react";

const PokemonList: React.Fc = () => {
  const [pokemons, setPokemons] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);

  return <div>포켓몬 리스트 부분</div>;
};
