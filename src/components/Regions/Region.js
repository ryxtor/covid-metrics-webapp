import PropTypes from 'prop-types';

const Region = ({
  id, name, todayConfirmed, todayDeaths,
}) => {
  console.log(id);
  return (
    <div id={id}>
      <p>{name}</p>
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
