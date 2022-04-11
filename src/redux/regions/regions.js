const REGIONS = 'covid/regions/regions';

const initialState = {
  totals: {},
  regions: [],
};

export const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGIONS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export const regionsData = (payload) => ({
  type: REGIONS,
  payload,
});

export const getRegions = async () => {
  const API = 'https://api.covid19tracking.narrativa.com/api/2022-04-11/country/united_kingdom';
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
  } = data.dates['2022-04-11'].countries['United Kingdom'];

  region.forEach((e) => {
    regions.push({
      id: e.id,
      name: e.name,
      deaths: e.today_deaths,
      confirmed: e.today_confirmed,
      todayDeaths: e.today_new_deaths,
      todayConfirmed: e.today_new_confirmed,
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
