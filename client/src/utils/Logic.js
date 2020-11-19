export const getDates = () => {
  var next4Days = [];

  var currentDate = new Date();
  next4Days.push(currentDate);

  var getDatesHelper = (currDate) => {
    if (next4Days.length < 4) {
      var nextDay = new Date(currDate);
      nextDay.setDate(currDate.getDate() + 1);
      next4Days.push(nextDay);
      getDatesHelper(nextDay);
    }
  }
  getDatesHelper(currentDate);

  return next4Days;
}