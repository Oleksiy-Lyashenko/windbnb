import classNames from 'classnames';

import search from './assets/search.svg';
import pin from './assets/pin.svg';
import { useState } from 'react';

export default function ModalSearch({
  open,
  setOpen,
  city,
  filterRooms,
  choosenCity,
  setChoosenCity,
  countOfGuests,
  setCountOfGuests
}) {
  const [openCity, setOpenCity] = useState(true);
  const [openGuests, setOpenGuests] = useState(false);

  const [countOfAdults, setCountOfAdults] = useState(0);
  const [countOfChilds, setCountOfChilds] = useState(0);

  const addAdults = () => {
    setCountOfAdults(countOfAdults + 1);
    setCountOfGuests(countOfGuests + 1);
  };

  const deleteAdults = () => {
    if (countOfAdults > 0) {
      setCountOfAdults(countOfAdults - 1);
      setCountOfGuests(countOfGuests - 1);
    }
  };

  const addChilds = () => {
    setCountOfChilds(countOfChilds + 1);
    setCountOfGuests(countOfGuests + 1);
  };

  const deleteChilds = () => {
    if (countOfChilds > 0) {
      setCountOfChilds(countOfChilds - 1);
      setCountOfGuests(countOfGuests - 1);
    }
  };

  const clickOnSearchButton = () => {
    setOpen(false);
    setOpenGuests(false);

    filterRooms(choosenCity, countOfGuests);
  };

  const clickOnFieldCity = () => {
    setOpenCity(true);
    setOpenGuests(false);
  };

  const clickOnCity = (room) => {
    setOpenCity(false);
    setChoosenCity(room);
    setOpenGuests(true);
  };

  const clickOnFieldGuests = () => {
    setOpenCity(false);
    setOpenGuests(true);
  };

  return (
    <div className={classNames('modal-search', { 'modal-search--open': open })}>
      <div
        className={classNames('modal-search__content', {
          'modal-search__content--open': open,
        })}>
        <div className="wrapper">
          <div className="input-container input-container__open">
            <div
              className={classNames('header__input header__input--location modal-search__input', {
                'modal-search__input--open': openCity,
              })}
              onClick={clickOnFieldCity}>
              <span className="modal-search__sign">location</span>

              {choosenCity ? (
                <span className="modal-search__title modal-search__title--choosen">
                  {choosenCity}, Finland
                </span>
              ) : (
                <span className="modal-search__title">Add location</span>
              )}
            </div>
            <div
              type="text"
              className={classNames('header__input header__input--location modal-search__input', {
                'modal-search__input--open': openGuests,
              })}
              onClick={clickOnFieldGuests}>
              <span className="modal-search__sign">guests</span>
              {countOfGuests > 0 ? (
                <span className="modal-search__title modal-search__title--choosen">
                  {countOfGuests} guests
                </span>
              ) : (
                <span className="modal-search__title">Add guests</span>
              )}
            </div>
            <button className="header__button header__button--open" onClick={clickOnSearchButton}>
              <img src={search} alt="" className="header__button--search" />
              Search
            </button>
          </div>

          {openCity && (
            <div className="modal-search__cities">
              {city.map((room, index) => (
                <div className="modal-search__city" key={index} onClick={() => clickOnCity(room)}>
                  <img src={pin} alt="" className="modal-search__pin" />
                  <span>{room}, Finland</span>
                </div>
              ))}
            </div>
          )}

          {openGuests && (
            <div className="add-guest">
              <div className="add-guest__block">
                <p className="add-guest__title">Adults</p>
                <p className="add-guest__subtitle">Ages 13 or above</p>
                <div className="add-guest__count">
                  <button className="add-guest__button" onClick={deleteAdults}>
                    -
                  </button>
                  <span className="add-guest__title add-guest__title--count">{countOfAdults}</span>
                  <button className="add-guest__button" onClick={addAdults}>
                    +
                  </button>
                </div>
              </div>

              <div className="add-guest__block">
                <p className="add-guest__title">Children</p>
                <p className="add-guest__subtitle">Ages 2-12</p>
                <div className="add-guest__count">
                  <button className="add-guest__button" onClick={deleteChilds}>
                    -
                  </button>
                  <span className="add-guest__title add-guest__title--count">{countOfChilds}</span>
                  <button className="add-guest__button" onClick={addChilds}>
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
