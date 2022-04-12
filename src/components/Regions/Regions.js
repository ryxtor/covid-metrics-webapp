import { useDispatch, useSelector } from 'react-redux';
import { orderByConfirmed, orderByDeaths } from '../../redux/regions/regions';
import Region from './Region';

const Regions = () => {
  const { regions, filter } = useSelector((state) => state.regionsReducer);
  const dispatch = useDispatch();

  const filterConfirmed = () => {
    dispatch(orderByConfirmed());
  };

  const filterDeaths = () => {
    dispatch(orderByDeaths());
  };

  return (
    <div>
      <div className="title-filter-container">
        <p className="region-title">Stats by regions</p>
        <div>
          Filter:
          { filter === 'default' && <button type="button" onClick={filterConfirmed}>Default</button>}
          { filter === 'deaths' && <button type="button" onClick={filterConfirmed}>Most Deaths</button>}
          { filter === 'confirmed' && <button type="button" onClick={filterDeaths}>Most Confirmed</button>}
        </div>
      </div>
      <div className="region-cards-container">
        {
          regions.map((region) => (
            <Region
              data={region}
              id={region.id}
              name={region.name}
              flag={region.flag}
              filter={filter}
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
