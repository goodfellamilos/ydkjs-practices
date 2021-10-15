const DAY_START = "07:30";
const DAY_END = "17:45";

function getTimeInMinutes(time) {
  const [hours, minutes] = time.split(":");
  return hours * 60 + Number(minutes);
}

function validateStartTime(startTime) {
  if (typeof startTime !== "string") {
    throw Error("Provided startTime is in wrong format!")
  }

  if (startTime.match(/^(\d{1,2}):(\d{2})$/g).length === 0) {
    throw Error("Provided startTime is in wrong format!")
  }
}

function scheduleMeeting (startTime, durationMinutes) {
  validateStartTime(startTime);

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

export default scheduleMeeting;
