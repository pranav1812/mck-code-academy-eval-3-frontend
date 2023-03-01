const filterMap = {
  All: (events) => events,
  Bookmarked: (events) => events.filter((event) => event.isBookmarked),
  Registered: (events) => events.filter((event) => event.isRegistered),
  SeatsAvailable: (events) => events.filter((event) => event.areSeatsAvailable),
};

export default filterMap;
