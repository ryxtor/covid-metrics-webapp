import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRegions, regionsData } from '../../redux/regions/regions';
import Regions from '../Regions/Regions';
import englandMap from '../../assets/uk-map.png';

const Homepage = () => {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regionsReducer);

  useEffect(() => {
    async function fetchData() {
      if (regions.regions.length === 0) {
        const API = await getRegions();
        dispatch(regionsData(API));
      }
    }
    fetchData();
  }, []);

  const totalDeaths = `Total Deaths: ${regions.totals.deaths}`;
  const totalConfirmed = `Total Confirmed: ${regions.totals.confirmed}`;
  const deathsToday = `Today's Deaths: ${regions.totals.todayDeaths}`;
  const confirmedToday = `Today's Confirmed: ${regions.totals.todayConfirmed}`;

  return (
    <div className="homepage">
      <div className="uk-container">
        <img className="uk-map" src={englandMap} alt="map" />
        <div className="uk-stats">
          <p>UNITED KINGDOM</p>
          <p>{totalConfirmed}</p>
          <p>{totalDeaths}</p>
          <p>{confirmedToday}</p>
          <p>{deathsToday}</p>
        </div>
      </div>
      <Regions />
    </div>
  );
};

export default Homepage;
