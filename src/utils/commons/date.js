export const getFormattedDate = (date, timezone) => {
  // date: 2023-03-01T05:00:00.000Z
  // timezone: America/Los_Angeles

  // desired output: 1 Mar 2023, 21:00 CT
  const dateObj = new Date(date);
  const dateObjWithTimezone = new Date(
    dateObj.toLocaleString('en-US', { timeZone: timezone }),
  );
  const formattedDate = dateObjWithTimezone.toLocaleString('en-US', {
    timeZone: 'UTC',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  return formattedDate;
};
