const DAY_START = "07:30";
const DAY_END = "17:45";

function getTimeInMinutes(time) {
  const [hours, minutes] = time.split(":");
  return hours * 60 + Number(minutes);
}

module.exports = function scheduleMeeting (startTime, durationMinutes) {
  if (!startTime || !startTime.match(/^(\d{1,2}):(\d{2})$/g)) {
    throw Error("Provided time is in a wrong format!");
  }

  if (typeof durationMinutes !== "number") {
    throw Error("Provided duration is not a number!");
  }

  const dayStartInMinutes = getTimeInMinutes(DAY_START);
  const dayEndInMinutes = getTimeInMinutes(DAY_END);
  const startTimeInMinutes = getTimeInMinutes(startTime);

  if (startTimeInMinutes < dayStartInMinutes ||
      startTimeInMinutes > dayEndInMinutes ||
      (startTimeInMinutes + durationMinutes) > dayEndInMinutes) {
    return false;
  }

  return true;
}
