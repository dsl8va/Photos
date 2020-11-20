// ********** Calendar Helpers ********** //

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getDates = () => {
  var next4Days = [];
  var currentDate = new Date();
  next4Days.push(getDatesInfo(currentDate));

  var getDatesHelper = (currDate) => {
    if (next4Days.length < 4) {
      var nextDay = new Date(currDate);
      nextDay.setDate(currDate.getDate() + 1);
      next4Days.push(getDatesInfo(nextDay));
      getDatesHelper(nextDay);
    }
  }

  getDatesHelper(currentDate);
  return next4Days;
}

export const getDatesInfo = (date) => {
  var dayOfWeek = daysOfWeek[date.getDay()];
  var dayOfMonth = date.getDate();
  var month = monthsOfYear[date.getMonth()];
  var result = {dayOfWeek, dayOfMonth, month};
  return result;
}