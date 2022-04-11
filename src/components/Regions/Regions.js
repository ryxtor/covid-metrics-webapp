import { useSelector } from 'react-redux';
import Region from './Region';

const Regions = () => {
  const regions = useSelector((state) => state.regionsReducer);

  return (
    <div>
      <p>Stats by regions</p>
      <div>
        {
          regions.regions.map((region) => (
            <Region
              data={region}
              id={region.id}
              name={region.name}
              todayConfirmed={region.todayConfirmed}
              todayDeaths={region.todayDeaths}
              key={region.id}
            />
          ))
        }
        asd
      </div>
    </div>
  );
};

export default Regions;
