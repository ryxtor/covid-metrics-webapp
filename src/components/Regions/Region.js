import PropTypes from 'prop-types';

const Region = ({
  id, name, todayConfirmed, todayDeaths,
}) => {
  console.log(id);
  return (
    <div id={id} className="region-card">
      <p className="region-name">{name}</p>
      <p>{todayConfirmed}</p>
      <p>{todayDeaths}</p>
    </div>
  );
};

Region.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  todayConfirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
};

export default Region;
