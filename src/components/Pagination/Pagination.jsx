import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import cls from './style/Style.module.scss'

export default function Pagination({ pageNum, setPageNum }) {
  const info = useSelector((e) => e.storeData.data.info);
  const next = (e) => {
    setPageNum(e + 1);
  };
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-3 my-4"
      forcePage={pageNum === 1 ? 0 : pageNum - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      previousLinkClassName="text-light text-decoration-none"
      nextLinkClassName='text-light text-decoration-none'
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      pageCount={info?.pages}
      onPageChange={(e) => next(e.selected)}
    />
  );
}
