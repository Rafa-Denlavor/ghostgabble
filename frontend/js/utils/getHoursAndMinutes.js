function getHoursAndMinutes() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes}`;
}