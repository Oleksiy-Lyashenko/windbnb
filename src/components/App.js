import { useState } from 'react';
import logo from './assets/logo.svg';
import star from './assets/star.svg';

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

            <p className="main__count">{chanedRooms.length}+ stays</p>
          </div>

          <div className="main__bottom">
            {chanedRooms.map((room) => (
              <div className="room">
                <div className="room__container-photo">
                  <img src={room.photo} alt="" className="room__photo" />
                </div>

                <div className="room__middle">
                  <span className="room__text">
                    {room.superHost && <span className="room__super-host">Super host</span>}
                    {room.type} {room.beds > 1 ? ` . ${room.beds} beds` : ``}
                  </span>

                  <div className="room__rating">
                    <img src={star} alt="" className="room__star" />

                    <p className="room__text">{room.rating}</p>
                  </div>
                </div>

                <p className="room__describe">{room.title}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
