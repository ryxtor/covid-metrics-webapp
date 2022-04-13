import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import Homepage from '../components/homepage/Homepage';
import Regions from '../components/Regions/Regions';
import store from '../redux/configureStore';

describe('Testing Components', () => {
  test('Render Header', () => {
    const tree = renderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render Homepage', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render Regions', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Regions />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
