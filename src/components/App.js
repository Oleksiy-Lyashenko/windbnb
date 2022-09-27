import { useState } from 'react';
import logo from './assets/logo.svg';
import search from './assets/search.svg';
import ModalSearch from './ModalSearch';

import data from './data/stays.json';
import { useEffect } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await data;

      setRooms(res);
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <div className="wrapper">
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="" className="logo" />
          </div>

          <div className="input-container" onClick={() => setOpen(true)}>
            <div className="header__input header__input--location" />
            <div type="text" className="header__input header__input--guest" />
            <button className="header__button">
              <img src={search} alt="" className="header__button--first" />
            </button>
          </div>

          <ModalSearch open={open} setOpen={setOpen} rooms={rooms} setRooms={setRooms}/>
        </header>
      </div>
    </div>
  );
}

export default App;
