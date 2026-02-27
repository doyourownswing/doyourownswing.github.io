// Events to be consumed by the UpcomingEventsV2 component

import { createDate, getNextThursday } from "@/utils/date_utils";

const L1_TOPICS = {
  week1: "Left side pass, underarm pass, sugar push",
  week2: "Whip",
  week3: "Underarm pass, sugar push, sugar tuck",
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
    date: createDate("01/29/2026"),
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
    dj: "Jake",
    facebookLink: "https://www.facebook.com/events/877189058035030/",
  },
  {
    date: createDate("02/12/2026"),
    noDyos: true,
    title: "Capital Swing weekend",
    subtitle: "See you next week!",
  },
  {
    title: "A Deep Dive into Connection week 1",
    subtitle: "The secret sauce behind WCS improvisation!",
    date: createDate("02/19/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week2,
    dj: "International Music Night!",
    facebookLink: "https://www.facebook.com/events/2444016136031608/",
  },
  {
    title: "A Deep Dive into Connection week 2",
    subtitle: "Creating conversations through the connection",
    date: createDate("02/26/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week3,
    dj: "Saumya",
    facebookLink: "https://www.facebook.com/events/876192111459926/",
  },
  {
    title: "How to dance to slow music",
    subtitle: "Learn how to fill the space between beats with dance",
    date: createDate("03/05/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week1,
    dj: "DJ Andy",
  },
  {
    title: "How to dance to REALLY slow music",
    subtitle: "Using the tempo to your advantage to create art",
    date: createDate("03/12/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week2,
    dj: "DJ Preston",
  },
  {
    title: "How to dance to fast music",
    subtitle: "Learn the technique required to keep up with faster songs",
    date: createDate("03/19/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week3,
  },
  {
    title: "How to dance to REALLY fast music",
    subtitle: "How to enjoy those super high tempos",
    date: createDate("03/26/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week4,
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

// Intro Class Scheduling doc: https://docs.google.com/spreadsheets/d/1JN8aU4991QY5T3iG_sc1WaUgN2MB8FN1t2rTakj4WOA/edit?gid=732299169#gid=732299169
//   Specifies the class topics
// Volunteer Sign Up Sheet: https://docs.google.com/spreadsheets/d/1xShbXzthXebT5oTHvB77HGHUBHOC3EyrIx05clzhVzI/edit?gid=0#gid=0
//   Usually has DJ details

// TODO support specifying a particular month
function getThisMonthsEvents() {
  let thisMonth = getNextThursday().month();

  return events.filter((event) => event.date.month() === thisMonth);
}

export default getThisMonthsEvents;
