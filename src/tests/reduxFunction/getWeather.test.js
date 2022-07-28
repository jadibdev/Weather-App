import { getWeather } from '../../features/wheather/weatherSlice';

it('getWeather correctly returns a promise', () => {
  expect(getWeather()).toEqual(expect.any(Function));
});
