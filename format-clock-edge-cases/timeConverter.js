function pad(num) {
  let stringNum = num.toString();
  if (stringNum.length < 2) {
    stringNum = "0" + stringNum;
    return stringNum;
  } else {
    return stringNum;
  }
}
function formatAs12HourClock(time = "") {
  if (typeof time != "string") {
    return "Not a valid format"; //check if time is a string
  }

  if (/\s/.test(time)) {
    return "Not a valid time"; //check for whitespace in string
  }

  if (
    (time.indexOf(":") === -1 && time.indexOf(".") === -1) ||
    (time.indexOf(":") !== -1 && time.indexOf(".") !== -1)
  ) {
    return "Not a valid time"; // check if there is only either one : or .
  }

  if (time.indexOf(":") === -1) {
    if (time.indexOf(".") !== time.lastIndexOf(".")) {
      return "Not a valid time"; //check there is only one .
    }
  }
  if (time.indexOf(".") === -1) {
    if (time.indexOf(":") !== time.lastIndexOf(":")) {
      return "Not a valid time"; //check if there is only one :
    }
  }

  let colonPeriodIndex = 0;
  if (time.indexOf(":") === -1) {
    colonPeriodIndex = time.indexOf(".");
  } else {
    colonPeriodIndex = time.indexOf(":");
  }

  if (
    time.slice(0, colonPeriodIndex) === "" ||
    time.slice(colonPeriodIndex + 1) === ""
  ) {
    return "Not a valid time"; //check if there is a number before and after time separator
  }
  const hours = Number(time.slice(0, colonPeriodIndex));
  const minutes = Number(time.slice(colonPeriodIndex + 1));
  const stringMinutes = pad(minutes);
  const stringHours = pad(hours);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours >= 24 ||
    hours < 0 ||
    minutes >= 60 ||
    minutes < 0 ||
    hours % 1 != 0 ||
    minutes % 1 != 0
  ) {
    return "Not a valid time";
  } //check if numbers are valid
  if (hours === 12) {
    return `${stringHours}:${stringMinutes} pm`;
  }
  if (hours === 0) {
    return `12:${stringMinutes} am`;
  }
  if (hours > 12) {
    return `${pad(hours - 12)}:${stringMinutes} pm`;
  }

  return `${stringHours}:${stringMinutes} am`;
}

export { formatAs12HourClock };
