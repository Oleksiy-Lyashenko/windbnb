import star from './assets/star.svg'

export default function Room({ room }) {
  return (
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
  );
}
