import React, { useState, useContext, useEffect } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/requests/index';
import { PATCH_DATA_BY_ID as PATCH_DATA_BY_ID_URL } from '../../constants/apiEndpoints';
import { PATCH_DATA_BY_ID as PATCH_DATA_BY_ID_METHOD } from '../../constants/apiMethods';
import { useParams } from 'react-router-dom';
import { getFormattedDate } from '../../utils/commons/date';
import { GlobalContext } from '../../Contexts';

const defaultEvent = (index) => ({
  id: 'Loading...',
  name: 'Loading...',
  description: 'Loading...',
  venue: 'Loading...',
  datetime: 'Loading...',
  timezone: 'Loading...',
  areSeatsAvailable: false,
  isRegistered: false,
  isBookmarked: false,
  imgUrl: 'Loading...',
  index,
});

const EventPage = () => {
  let { index } = useParams();
  const { events, setEvents } = useContext(GlobalContext);
  const [event, setEvent] = useState(defaultEvent(index));

  useEffect(() => {
    console.log('event', events[index]);
    if (events && index < events.length) {
      setEvent(events[index]);
    } else {
      setEvent(defaultEvent(index));
    }
  }, [index]);

  const toggleRegisteration = async () => {
    try {
      if (!event.areSeatsAvailable && !event.isRegistered) {
        return 0; // do nothing
      }

      const patchData = {
        isRegistered: !event.isRegistered,
      };

      await makeRequest(
        PATCH_DATA_BY_ID_METHOD,
        PATCH_DATA_BY_ID_URL(event.id),
        patchData,
      );

      setEvent({ ...event, isRegistered: !event.isRegistered });
      let updatedEvents = [...events];
      updatedEvents[index] = { ...event, isRegistered: !event.isRegistered };
      // updating context because we are using the same event in 2 places: home -cards and event-details page
      setEvents(updatedEvents);
    } catch (error) {
      console.log('error while toggling registeration', error);
    }
  };

  const toggleBookmark = async () => {
    try {
      const patchData = {
        isBookmarked: !event.isBookmarked,
      };
      await makeRequest(
        PATCH_DATA_BY_ID_METHOD,
        PATCH_DATA_BY_ID_URL(event.id),
        patchData,
      );

      setEvent({ ...event, isBookmarked: !event.isBookmarked });
      let updatedEvents = [...events];
      updatedEvents[index] = { ...event, isBookmarked: !event.isBookmarked };
      setEvents(updatedEvents);
    } catch (error) {
      console.log('error while toggling bookmark', error);
    }
  };
  return (
    <div className="event-page">
      <div className="event-page-inner">
        <img src={event.imgUrl} alt={event.id + event.imgUrl} />
        <hr />
        <div className="event-page-text">
          <h2>{event.name}</h2>
          <p className="event-page-para-des">{event.description}</p>
          <p className="event-page-para-ven">VENUE: {event.venue}</p>
          <p className="event-page-para-ven">
            DATE: {getFormattedDate(event.datetime, event.timezone)}
          </p>
        </div>

        <div className="event-page-footer">
          <div>
            <p>
              {event.isRegistered
                ? 'REGISTERED'
                : event.areSeatsAvailable
                ? 'REGISTER'
                : 'NO SEATS AVAILABLE'}
            </p>
          </div>
          <div>
            <button onClick={toggleBookmark}>
              {event.isBookmarked ? 'BOOKMARKED' : 'BOOKMARK'}
            </button>
          </div>
        </div>

        <div className="event-page-footer-2">
          <div>
            <button onClick={toggleRegisteration}>
              {event.isRegistered
                ? 'REGISTERED'
                : event.areSeatsAvailable
                ? 'REGISTER'
                : 'NO SEATS AVAILABLE'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

EventPage.propTypes = {
  index: PropTypes.number.isRequired,
};

export default EventPage;
