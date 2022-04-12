import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Homepage from './components/homepage/Homepage';
import Details from './components/Details/Details';

function App() {
  const { regions } = useSelector((state) => state.regionsReducer);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
        {
          regions.map((e) => (
            <Route
              key={e.id}
              path={`/${e.id}`}
              element={(
                <Details
                  id={e.id}
                  name={e.name}
                  confirmed={e.confirmed}
                  deaths={e.deaths}
                  todayConfirmed={e.todayConfirmed}
                  todayDeaths={e.todayDeaths}
                  flag={e.flag}
                />
              )}
            />
          ))
        }
      </Routes>
    </Router>
  );
}

export default App;
