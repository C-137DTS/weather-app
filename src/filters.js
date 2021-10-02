function formatDate(date) {
  date = date.split("-");
  const year = parseInt(date[0]);
  const month = parseInt(date[1] - 1);
  const day = parseInt(date[2]);

  const applicableDate = new Date(year, month, day);

  return applicableDate.toDateString().slice(0, -4);
}

export { formatDate };
