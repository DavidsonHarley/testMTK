import React from 'react';
import cls from './style/Style.module.scss';

export default function Search({ setPageNum, setSearch }) {
  const handleInput = (e) => {
    setPageNum(1);
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="d-flex justify-content-center gap-4 mb-5"
      action=""
    >
      <input
        type="text"
        className={cls.input}
        onChange={handleInput}
        placeholder="Search"
      />
      <button onClick={handleSubmit} className={`${cls.btn} btn btn-primary fs-5 `}>Search</button>
    </form>
  );
}
