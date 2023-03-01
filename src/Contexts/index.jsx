import React, { createContext, useState, useEffect } from 'react'; // , useEffect
import PropTypes from 'prop-types';
import makeRequest from '../utils/requests';
import { GET_ALL_EVENTS as GET_ALL_EVENTS_URL } from '../constants/apiEndpoints';
import { GET_ALL_EVENTS as GET_ALL_EVENTS_METHOD } from '../constants/apiMethods';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext({
  events: [],
  setEvents: () => {},
  filter: 'All',
  setFilter: () => {},
  search: '',
  setSearch: () => {},
});

/* 
[
  {
    "id": 1,
    "name": "Battle of the Bands",
    "description": "Get ready for Battle of the Bands, where the hottest up-and-coming rock groups will compete for the ultimate prize. With heart-pumping beats and electrifying performances, you won't want to miss this adrenaline-fueled event. Each band will bring their A-game, leaving everything on the stage for the chance to be crowned champion. Don't miss out on the most unforgettable rock competition of the year!",
    "venue": "All Stars Arena, Las Vegas, NV, USA",
    "datetime": "2023-03-01T05:00:00.000Z",
    "timezone": "America/Los_Angeles",
    "areSeatsAvailable": true,
    "isRegistered": false,
    "isBookmarked": false,
    "imgUrl": "https://i.ibb.co/3zbdvWX/battle-of-bands.jpg"
    index: 0,
  },
]
*/

const GlobalContextProvider = ({ children }) => {
  const [events, setEvents] = useState({});
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    console.log('Context Provider useEffect called');
    makeRequest(GET_ALL_EVENTS_METHOD, GET_ALL_EVENTS_URL, {}, {}, navigate)
      .then((res) => {
        // res.sort((a, b) => a.name < b.name);
        const events = res.map((event, index) => ({ ...event, index }));
        setEvents(events);
      })
      .catch((err) => {
        console.log('error while fetching events', err);
        // navigate('/error');
      });
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        events,
        setEvents,
        filter,
        setFilter,
        search,
        setSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContextProvider;
