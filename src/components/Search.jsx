import { useEffect, useState } from 'react';
import search from './assets/search.svg';
import ModalSearch from './ModalSearch';

export default function Search({ rooms, setRooms, filterRooms }) {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState([]);

  const [choosenCity, setChoosenCity] = useState('');
  const [countOfGuests, setCountOfGuests] = useState(0);

  useEffect(() => {
    const emptyArr = [];

    rooms.map((room) => {
      if (!emptyArr.includes(room.city)) {
        emptyArr.push(room.city);
      }
    });

    setCity(emptyArr);
  }, [rooms]);

  return (
    <>
      <div className="input-container" onClick={() => setOpen(true)}>
        <div className="header__input header__input--location">
          {choosenCity ? (
            <span className="modal-search__title modal-search__title--choosen">
              {choosenCity}, Finland
            </span>
          ) : (
            <span className="modal-search__title">Add location</span>
          )}
        </div>
        <div type="text" className="header__input header__input--guest">
          {countOfGuests > 0 ? (
            <span className="modal-search__title modal-search__title--choosen">
              {countOfGuests} guests
            </span>
          ) : (
            <span className="modal-search__title">Add guests</span>
          )}
        </div>
        <button className="header__button">
          <img src={search} alt="" className="header__button--first" />
        </button>
      </div>

      <ModalSearch
        open={open}
        setOpen={setOpen}
        city={city}
        filterRooms={filterRooms}
        choosenCity={choosenCity}
        setChoosenCity={setChoosenCity}
        countOfGuests={countOfGuests}
        setCountOfGuests={setCountOfGuests}
      />
    </>
  );
}
