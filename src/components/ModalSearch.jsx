import classNames from 'classnames';

import search from './assets/search.svg';
import pin from './assets/pin.svg';
import { useEffect, useState } from 'react';

export default function ModalSearch({ open, setOpen, rooms, setRooms }) {
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    const city = [];

    rooms.map((room) => {
      if (!city.includes(room.city)) {
        city.push(room.city);
      }
    })

    setNewArr([...city]);

  }, []);

  return (
    <div className={classNames('modal-search', { 'modal-search--open': open })}>
      <div
        className={classNames('modal-search__content', {
          'modal-search__content--open': open,
        })}>
        <div className="wrapper">
          <div className="input-container input-container__open">
            <div className="header__input header__input--location modal-search__input">
              <span className="modal-search__sign">location</span>

              <span className="modal-search__title">Add location</span>
            </div>
            <div type="text" className="header__input header__input--guest modal-search__input">
              <span className="modal-search__sign">guests</span>
              <span className="modal-search__title">Add guests</span>
            </div>
            <button className="header__button header__button--open" onClick={() => setOpen(false)}>
              <img src={search} alt="" className="header__button--search" />
              Search
            </button>
          </div>

          <div className="modal-search__rooms">
            {newArr.map((room, index) => (
              <div key={index}>
                <img src={pin} alt="" />
                <span>
                  {room}, Finland
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
