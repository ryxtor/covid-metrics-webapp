import { orderByMostConfirmed, orderByMostDeaths } from '../redux/regions/regions';

describe('Unit test for pure functions', () => {
  test('Test order by most deaths', () => {
    const obj = [
      {
        todayDeaths: 2,
      },
      {
        todayDeaths: 5,
      },
      {
        todayDeaths: 11,
      },
      {
        todayDeaths: 7,
      },
    ];
    const order = orderByMostDeaths(obj);
    expect(order[0].todayDeaths).toEqual(11);
  });
  test('Test order by most confirmed', () => {
    const obj = [
      {
        todayConfirmed: 3,
      },
      {
        todayConfirmed: 12,
      },
      {
        todayConfirmed: 4,
      },
      {
        todayConfirmed: 9,
      },
    ];
    const order = orderByMostConfirmed(obj);

    expect(order[0].todayConfirmed).toEqual(12);
  });
});
