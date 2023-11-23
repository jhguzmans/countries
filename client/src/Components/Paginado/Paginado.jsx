import style from "./Paginado.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextPage,
  prevPage,
  setPage,
  doCurrentCountries,
} from "../../redux/actions";
import {} from "react-redux";

const Paginado = () => {
  const dispatch = useDispatch();
  const countryXpage = 10;
  const currentCountries = useSelector((state) => state.currentCountries);
  let countryRender = useSelector((state) => state.countryRender);
  const countryName = useSelector((state) => state.countryName);
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
  const totalCountries = currentCountries.length;
  const indexOfLastCountry = currentPage * countryXpage;
  const indexOfFirstCountry = indexOfLastCountry - countryXpage;
  useEffect(() => {
    if (countryName.length === 1) {
      countryRender = countryName;
    } else {
      countryRender = currentCountries;
    }
    dispatch(
      doCurrentCountries(countryRender, indexOfFirstCountry, indexOfLastCountry)
    );
  }, [
    dispatch,
    currentPage,
    indexOfFirstCountry,
    indexOfLastCountry,
    countryRender,
    currentCountries,
    countryName,
  ]);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countryXpage); i++) {
    pageNumbers.push(i);
  }
  const last = pageNumbers.length;
  const penu = last - 1;
  const first = 1;
  const lessOne = currentPage - 1;
  const plusOne = currentPage + 1;
  return (
    <div className={style.container}>
      {currentPage !== 1 && (
        <button key="prev" onClick={() => handlePageClick("prev")}>
          Prev
        </button>
      )}
      {currentPage > 1 && (
        <button key={first} onClick={() => handlePageClick(first)}>
          {first}
        </button>
      )}
      <p>...</p>
      {lessOne > 1 && (
        <button key={lessOne} onClick={() => handlePageClick(lessOne)}>
          {lessOne}
        </button>
      )}
      <button
        key={currentPage}
        className={style.current}
        onClick={() => handlePageClick(currentPage)}
      >
        {currentPage}
      </button>
      {plusOne < penu && (
        <button key={plusOne} onClick={() => handlePageClick(plusOne)}>
          {plusOne}
        </button>
      )}
      <p>.........</p>
      {currentPage < penu && (
        <button key={penu} onClick={() => handlePageClick(penu)}>
          {penu}
        </button>
      )}
      {currentPage < last && (
        <button key={last} onClick={() => handlePageClick(last)}>
          {last}
        </button>
      )}
      {currentPage !== pageNumbers.length && (
        <button key="next" onClick={() => handlePageClick("next")}>
          Next
        </button>
      )}
    </div>
  );
};

export default Paginado;
