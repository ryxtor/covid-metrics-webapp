import PropTypes from 'prop-types';

const Details = ({
  id, name, confirmed, deaths, todayConfirmed, todayDeaths, flag,
}) => (
  <div id={id} className="details">
    <div className="details-flag-container">
      <img className="details-flag" src={flag.flag} alt={flag.name} />
      <div>
        <h2 className="details-name">{name}</h2>
        <div className="details-name-cases">
          <p>Confirmed: </p>
          <p>{confirmed}</p>
        </div>
      </div>
    </div>
    <p className="details-title">REGION STATS</p>
    <ul className="details-ul">
      <li>
        <p>Total Confirmed</p>
        <p>{confirmed}</p>
      </li>
      <li>
        <p>Total Deaths</p>
        <p>{deaths}</p>
      </li>
      <li>
        <p>Today&apos;s Confirmed</p>
        <p>{todayConfirmed}</p>
      </li>
      <li>
        <p>Today&apos;s Deaths</p>
        <p>{todayDeaths}</p>
      </li>
    </ul>
  </div>
);

Details.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  confirmed: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  todayConfirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  flag: PropTypes.instanceOf(Object).isRequired,
};

export default Details;
