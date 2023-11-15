import style from "./Paginado.module.css";
import React from "react";
import { useEffect } from "react"; // Agrega "useState"

import { useSelector } from "react-redux";
import {
  nextPage,
  prevPage,
  setPage,
  currentPokemons,
} from "../../redux/actions";
import { useDispatch } from "react-redux";

const Paginado = () => {
  const dispatch = useDispatch();
  const pokXpage = 6;
  const allPokemons = useSelector((state) => state.allPokemons);
  let pokeRender = useSelector((state) => state.pokeRender);
  const pokeName = useSelector((state) => state.pokeName);
  const currentPage = useSelector((state) => state.currentPage);
  const handlePageClick = (pageNumber) => {
    if (pageNumber === "prev" && currentPage > 1) {
      dispatch(prevPage);
    } else if (pageNumber === "next") {
      dispatch(nextPage);
    } else if (typeof pageNumber === "number") {
      dispatch(setPage(pageNumber));
    }
  };
  const totPok = allPokemons.length;
  const indexOfLastPokemon = currentPage * pokXpage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokXpage;
  if (pokeName.length === 1) {
    pokeRender = pokeName;
  } else {
    pokeRender = allPokemons;
  }
  useEffect(() => {
    dispatch(
      currentPokemons(pokeRender, indexOfFirstPokemon, indexOfLastPokemon)
    );
  }, [
    dispatch,
    currentPage,
    indexOfFirstPokemon,
    indexOfLastPokemon,
    pokeRender,
  ]);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totPok / pokXpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={style.container}>
      {currentPage !== 1 && (
        <button key="prev" onClick={() => handlePageClick("prev")}>
          Prev
        </button>
      )}
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => handlePageClick(number)}>
          {number}
        </button>
      ))}
      {currentPage !== pageNumbers.length && (
        <button key="next" onClick={() => handlePageClick("next")}>
          Next
        </button>
      )}
    </div>
  );
};

export default Paginado;
