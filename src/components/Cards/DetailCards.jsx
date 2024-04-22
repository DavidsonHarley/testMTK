import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { modal } from '../../store/actions/actionModal';

export default function DetailCards() {
  const [card, setCard] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((e) => setCard(e));
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <div className="card" style={{ width: '32rem' }}>
          <img src={card?.image} className="card-img-top" alt={card?.name} />
          <div className="card-body d-flex flex-column mb-4 ">
            <h5 className="card-title fs-2 mb-4">{card?.name}</h5>
            <p className="card-text fs-5">
              {' '}
              Location-
              {card?.location?.name}
            </p>
            <p className="card-text fs-5">
              {' '}
              Species-
              {card?.species}
            </p>
            <p className="card-text fs-5">
              {' '}
              Gender-
              {card?.gender}
            </p>
            <small className="card-text fs-5">
              Status-
              {card?.status}
            </small>
            <Link to="/" className="btn btn-primary my-3 fs-2" onClick={dispatch(modal(false))}>Back</Link>
          </div>
        </div>
      </div>
    </>
  );
}
