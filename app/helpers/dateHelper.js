const dateNow = () => {
  let date = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");
  return date;
};

export default {
  dateNow,
};
