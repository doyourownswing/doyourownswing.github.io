const { createDate, getBeginningOfTodayDate } = require("utils/date_utils");

const announcements = [
  {
    text: "DYOS is on ❄️ winter break ❄️! No classes or socials until January 9th!",
    startDate: createDate("11/21/2024"),
    endDate: createDate("01/05/2025"),
  },
];

function getCurrentAnnouncement() {
  let beginningOfToday = getBeginningOfTodayDate();

  for (let announcement of announcements) {
    if (
      announcement.startDate <= beginningOfToday &&
      announcement.endDate >= beginningOfToday
    ) {
      return announcement;
    }
  }

  return null;
}

export { getCurrentAnnouncement };
