import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cls from './style/Style.module.scss';
import { modal } from '../../store/actions/actionModal';
import Example from '../Modal/Modal';

export default function Cards() {
  let cards;
  const dispatch = useDispatch();
  const [linkId, setLinkId] = useState();
  const data = useSelector((store) => store.storeData.data.results);
  const handleShow = (e) => {
    setLinkId(e);
    dispatch(modal(true));
  };
  if (data) {
    cards = data?.map(({
      id, name, image, location,
    }) => (
      <div key={id} className="card">
        <Link className={cls.link} to="#" onClick={() => handleShow(id)}>
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body">
            <h6 className="fw-bold fs-5">{name}</h6>
            <p className="fw-normal fs-5">Location:</p>
            <p className="fst-normal lh-sm">{location.name}</p>
          </div>
        </Link>
        <Example linkId={linkId} />
      </div>
    ));
  } else {
    cards = 'Not Found';
  }
  return (
    <div className={`${cls.container} col gap-3`}>
      {cards}
    </div>
  );
}
