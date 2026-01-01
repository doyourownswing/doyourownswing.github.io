// Events to be consumed by the UpcomingEventsV2 component

import { createDate, getNextThursday } from "@/utils/date_utils";

const L1_TOPICS = {
  week1: "Left side pass, underarm pass, sugar push",
  week2: "Whip",
  week3: "Underarm pass, sugar push, and sugar tuck",
  week4: "Left side pass, sugar push, spinning side pass",
};

const events = [
  {
    date: createDate("01/08/2026"),
    title: "Footwork Variations week 1",
    subtitle: "Upgrading the anchors of basic patterns",
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week1,
    dj: "DJ Preston",
    facebookLink: "https://www.facebook.com/events/1808534483171360/",
  },
  {
    date: createDate("01/15/2026"),
    title: "Footwork Variations week 2",
    subtitle: "Shag-inspired partnered footwork",
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week2,
    dj: "",
    facebookLink: "https://www.facebook.com/events/3510704995737437/",
  },
  {
    date: createDate("01/22/2026"),
    title: "Footwork Variations week 3",
    subtitle: "Cure your winter blues with bluesy anchor variations!",
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week3,
    dj: "",
    facebookLink: "https://www.facebook.com/events/1227344559457439/",
  },
  {
    date: createDate("01/28/2026"),
    title: "Footwork Variations week 4",
    subtitle: "Exploring classic blues patterns!",
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week4,
    dj: "",
    facebookLink: "https://www.facebook.com/events/751684230659648/",
  },
  {
    date: createDate("02/05/2026"),
    title: "Footwork Variations week 5",
    subtitle: "Let's level up some classic blues patterns",
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week1,
    dj: "",
    facebookLink: "https://www.facebook.com/events/877189058035030/",
  },
  {
    date: createDate("02/12/2026"),
    noDyos: true,
    title: "Capital Swing weekend",
    subtitle: "See you next week!",
  },
];

// Example no DYOS item:
// Date, title, and subtitle are visible
//
// {
//   date: createDate("01/09/2026"),
//   noDyos: true,
//   title: "No DYOS",
//   subtitle: "See you next week",
// },

// TODO support specifying a particular month
function getThisMonthsEvents() {
  let thisMonth = getNextThursday().month();

  return events.filter((event) => event.date.month() == thisMonth);
}

export default getThisMonthsEvents;
