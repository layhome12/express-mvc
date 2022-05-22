export default {
  dateNow: function () {
    let date = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");
    return date;
  },
};
