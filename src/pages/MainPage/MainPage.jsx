import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cls from './Style/Style.module.scss';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import { useDispatch } from 'react-redux';
import { gettingData } from '../../store/actions/actionData';
import img from '../../../public/528-0-1447526230.webp'

export default function MainPage() {
  const [pageNum, setPageNum] = useState(1);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}`;
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((e) => dispatch(gettingData(e)));
  }, [api]);
  return (
    <div>
      <div className={cls.header}>
        <div className="text-center my-5">
          <img src={img} alt="img" style={{ width: '17rem' }} />
        </div>
        <h1 className={`${cls.title} text-center my-3`}>The Rick and Morty API</h1>
      </div>
      <Search setPageNum={setPageNum} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-stretch">
              <Cards />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNum={pageNum} setPageNum={setPageNum} />
    </div>
  );
}
