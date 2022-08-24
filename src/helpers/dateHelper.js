import moment from "moment";

const dateNow = () => {
  let date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  return date;
};

export default {
  dateNow,
};
