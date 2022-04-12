import PropTypes from 'prop-types';
import flags from '../../assets/Flags/Flags';

const Region = ({
  id, name, todayConfirmed, todayDeaths, i,
}) => {
  console.log(id);
  return (
    <div id={id} className="region-card">
      <img className="region-flag" src={flags[i].flag} alt={flags[i].name} />
      <div className="region-stats">
        <p className="region-name">{name}</p>
        <p>{todayConfirmed}</p>
        <p>{todayDeaths}</p>
      </div>
    </div>
  );
};

Region.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  todayConfirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
};

export default Region;
