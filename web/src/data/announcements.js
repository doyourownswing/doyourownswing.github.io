const { createDate, getBeginningOfTodayDate } = require("utils/date_utils");

const announcements = [
  {
    text: "DYOS is on ❄️ winter break ❄️! No classes or socials until January 9th!",
    startDate: createDate("11/21/2024"),
    endDate: createDate("01/05/2025"),
  },
  {
    text: "New class schedule starting Febrary 20th!",
    startDate: createDate("02/04/2025"),
    endDate: createDate("02/21/2025"),
  },
  {
    text: "No class on August 7th! See you on August 14th!",
    startDate: createDate("07/31/2025"),
    endDate: createDate("08/07/2025"),
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
