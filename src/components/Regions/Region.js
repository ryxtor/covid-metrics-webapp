import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrowLogo from '../../assets/icons/right-arrow.png';

const Region = ({
  id, name, todayConfirmed, todayDeaths, filter, flag,
}) => (
  <div id={id} className="region-card">
    <Link to={`/${id}`}>
      <img className="arrow-logo" src={arrowLogo} alt="arrow" />
      <img className="region-flag" src={flag.flag} alt={flag.name} />
      <div className="region-stats">
        <p className="region-name">{name}</p>
        { filter === 'default' && <p>{todayConfirmed}</p>}
        { filter === 'confirmed' && <p>{todayConfirmed}</p>}
        { filter === 'deaths' && <p>{todayDeaths}</p>}
      </div>
    </Link>
  </div>
);

Region.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  todayConfirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  flag: PropTypes.instanceOf(Object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default Region;
