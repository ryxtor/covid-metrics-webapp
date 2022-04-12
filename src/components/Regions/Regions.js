import { useSelector } from 'react-redux';
import Region from './Region';

const Regions = () => {
  const regions = useSelector((state) => state.regionsReducer);

  return (
    <div>
      <p className="region-title">Stats by regions</p>
      <div className="region-cards-container">
        {
          regions.regions.map((region, i) => (
            <Region
              data={region}
              id={region.id}
              name={region.name}
              i={i}
              todayConfirmed={region.todayConfirmed}
              todayDeaths={region.todayDeaths}
              key={region.id}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Regions;
