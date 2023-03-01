import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import './style.css';
import { GlobalContext } from '../../Contexts';

import { Card, Filter } from '../../Components';

const Home = () => {
  const { events, filter, search } = useContext(GlobalContext);
  const [homeEvents, setHomeEvents] = useState([]);
  // const navigate = useNavigate();

  const filterMap = {
    All: (events) => events,
    Bookmarked: (events) => events.filter((event) => event.isBookmarked),
    Registered: (events) => events.filter((event) => event.isRegistered),
    SeatsAvailable: (events) =>
      events.filter((event) => event.areSeatsAvailable),
  };

  useEffect(() => {
    console.log('Home useEffect called');
    if (!events || !events.length) {
      console.log('No events found');
    }
    setHomeEvents(filterMap[filter](events));
  }, [events, filter, search]);
  return (
    <div className="home">
      <div className="home-filter">
        <Filter />
      </div>

      <div className="home-cards">
        {homeEvents.length ? (
          homeEvents.map((event, index) => {
            console.log('Hi', index, 'Eve: ', event.index, event);
            return <Card key={index} event={event} index={event.index} />;
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
