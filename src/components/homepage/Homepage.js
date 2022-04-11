import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRegions, regionsData } from '../../redux/regions/regions';
import Regions from '../Regions/Regions';

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

  return (
    <div>
      Under construction
      <Regions />
    </div>
  );
};

export default Homepage;
