import flags from '../../assets/Flags/Flags';

const REGIONS = 'covid/regions/regions';
const ORDER_BY_MOST_DEATHS = 'covid/regions/order_by_most_deaths';
const ORDER_BY_MOST_CONFIRMED = 'covid/regions/order_by_most_confirmed';

const d = new Date();
const year = d.getFullYear();
let day = (d.getDate() - 1).toString();
let month = (d.getMonth() + 1).toString();

if (day.length === 1) {
  day = `0${day}`;
}

if (month.length === 1) {
  month = `0${month}`;
}

const date = `${year}-${month}-${day}`;

const initialState = {
  totals: {},
  regions: [],
};

export const orderByMostDeaths = (regions) => {
  const arr = regions;
  arr.sort((a, b) => b.todayDeaths - a.todayDeaths);
  return arr;
};

export const orderByMostConfirmed = (regions) => {
  const arr = regions;
  arr.sort((a, b) => b.todayConfirmed - a.todayConfirmed);
  return arr;
};

export const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGIONS:
      return {
        ...action.payload, filter: 'default',
      };
    case ORDER_BY_MOST_CONFIRMED:
      return {
        ...state, regions: orderByMostConfirmed(state.regions), filter: 'confirmed',
      };
    case ORDER_BY_MOST_DEATHS:
      return {
        ...state, regions: orderByMostDeaths(state.regions), filter: 'deaths',
      };
    default:
      return state;
  }
};

export const regionsData = (payload) => ({
  type: REGIONS,
  payload,
});

export const orderByDeaths = () => ({
  type: ORDER_BY_MOST_DEATHS,
});

export const orderByConfirmed = () => ({
  type: ORDER_BY_MOST_CONFIRMED,
});

export const getRegions = async () => {
  const API = `https://api.covid19tracking.narrativa.com/api/${date}/country/united_kingdom`;
  const response = await fetch(API);
  const data = await response.json();
  const regions = [];

  const {
    name,
    regions: region,
    today_deaths: deaths,
    today_confirmed: confirmed,
    today_new_deaths: todayDeaths,
    today_new_confirmed: todayConfirmed,
  } = data.dates[date].countries['United Kingdom'];

  region.forEach((e, i) => {
    regions.push({
      id: e.id,
      name: e.name,
      deaths: e.today_deaths,
      confirmed: e.today_confirmed,
      todayDeaths: e.today_new_deaths,
      todayConfirmed: e.today_new_confirmed,
      flag: flags[i],
    });
  });

  const returnData = {
    regions,
    totals: {
      name,
      deaths,
      confirmed,
      todayDeaths,
      todayConfirmed,
    },
  };
  return returnData;
};
