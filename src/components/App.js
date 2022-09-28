import { useState } from 'react';
import logo from './assets/logo.svg';

import data from './data/stays.json';
import { useEffect } from 'react';
import Search from './Search';

function App() {
  const [rooms, setRooms] = useState([]);
  const [chanedRooms, setChangedRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await data;

      setRooms(res);
      setChangedRooms(res);
    };

    fetchData();
  }, []);

  const filterRooms = (city, guests) => {
    const filterArr = rooms.filter((room) => {
      return room.city === city && room.maxGuests >= guests;
    });

    setChangedRooms([...filterArr]);
  };

  return (
    <div className="page">
      <div className="wrapper">
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="" className="logo" />
          </div>

          <Search rooms={rooms} setRooms={setRooms} filterRooms={filterRooms} />
        </header>

        <main className="main">
          <div className="main__top">
            <h1 className="main__title">Stays in Finland</h1>

            <p className='main__count'>{chanedRooms.length}+ stays</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
