export const getFormattedDate = (date, timezone) => {
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
