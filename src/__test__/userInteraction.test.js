import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('Testing user interaction', () => {
  test('Go to details page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const englandCard = await screen.findByText('England');
    userEvent.click(englandCard);
    const totalDeaths = await screen.findByText('REGION STATS');
    await waitFor(() => expect(totalDeaths.classList.contains('details-title')).toBeTruthy());
  });
  test('Go back to HomePage', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const englandCard = await screen.findByText('England');
    userEvent.click(englandCard);
    const backButton = await screen.findByText('<');
    userEvent.click(backButton);
    const regionTitle = await screen.findByText('STATS BY REGIONS');
    await waitFor(() => expect(regionTitle.classList.contains('region-title')).toBeTruthy());
  });
});
