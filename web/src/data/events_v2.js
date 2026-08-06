// Events to be consumed by the UpcomingEventsV2 component

import { createDate, getNextThursday, nameOfMonth } from "@/utils/date_utils";

// Important: if you change the key names here, also update the object accesses
// in `allEvents` and `getThisMonthsEvents` below.
const L1_TOPICS = {
  week1: "Left side pass, underarm pass, sugar push",
  week2: "Right side pass, closed position, whip",
  week3: "Underarm pass, sugar push, sugar tuck",
  week4: "Left side pass, sugar push, spinning side pass",
};

const allEvents = [
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
    facebookLink: "https://www.facebook.com/events/2031234317734554/",
  },
  {
    title: "How to dance to REALLY slow music",
    subtitle: "Using the tempo to your advantage to create art",
    date: createDate("03/12/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week2,
    dj: "DJ Preston",
    facebookLink: "https://www.facebook.com/events/782230681608121/",
  },
  {
    title: "How to dance to fast music",
    subtitle:
      "Featuring cookies from Sweet Note Cakes to celebrate March birthdays!",
    date: createDate("03/19/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week3,
    facebookLink: "https://www.facebook.com/events/3012544525800616/",
  },
  {
    title: "How to dance to REALLY fast music",
    subtitle: "How to enjoy those super high tempos",
    date: createDate("03/26/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week4,
    facebookLink: "https://www.facebook.com/events/1220627546942076/",
  },

  {
    title: "DYOScavenger hunt",
    subtitle:
      "Get your detective on with the Secret Agent game during the social!",
    date: createDate("04/02/2026"),
    advanceTopic: "Changing the Game: start one pattern, finish with another",
    levelOneTopic: L1_TOPICS.week1,
    dj: "DJ Preston",
    facebookLink: "https://www.facebook.com/events/935827152339981/",
  },
  {
    title: "The Game Changening: week 2",
    subtitle:
      "Learn about your fellow dancers with the Clean Laundry game during the social!",
    date: createDate("04/09/2026"),
    advanceTopic: "Tag, You're  It: you move, I move, we move",
    dj: "DJ Andy",
    levelOneTopic: L1_TOPICS.week2,
  },
  {
    title: "Riley's Turns 33% Self Indulgent + Potluck",
    subtitle: "Come celebrate Riley's birthday with us!",
    date: createDate("04/16/2026"),
    advanceTopic: "Riley Says... (exactly what it sounds like)",
    levelOneTopic: L1_TOPICS.week3,
    facebookLink: "https://www.facebook.com/events/1177781147574274/",
  },
  {
    title: "Do Your Own Blues Week 1",
    subtitle: "Dust of your blues shoes, we're practicing our call & response!",
    date: createDate("04/23/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week4,
    dj: "DJ Saucy",
    facebookLink: "",
  },
  {
    title: "Do Your Own Blues Week 2",
    subtitle: "Continue practicing our call & response while dancing to blues!",
    date: createDate("04/30/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week4,
    dj: "DJ Reece",
    facebookLink: "",
  },
  {
    title: "Scene Kid Night",
    subtitle:
      "Featuring social dance music that will get you right in the Gen X / Millennial nostalgia!",
    date: createDate("05/07/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week1,
    dj: "DJ Riley",
    facebookLink:
      "https://www.facebook.com/doyourownswing/posts/pfbid02BeaXXetfKsj3fivsajnVAzWmwFoPFpmy6cgmFR9KRfvWU4uZQ6r1QmwAQQ9aDDRLl",
  },
  {
    title: "May week 2!",
    date: createDate("05/14/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week2,
    dj: "DJ Andy",
    facebookLink: "",
  },
  {
    title: "May week 3!",
    subtitle: "Featuring a performance from Knockout Pride dance team!",
    date: createDate("05/21/2026"),
    advanceTopic: "",
    levelOneTopic: L1_TOPICS.week3,
    dj: "DJ Musikaela",
    facebookLink: "",
  },
  {
    title: "Special Guest Instructor: Elizabeth Spann",
    subtitle: "Lizzy is going to be teaching the L3 and L4 classes!",
    date: createDate("05/28/2026"),
    levelOneTopic: L1_TOPICS.week4,
    dj: "DJs Jake, Jen, and Saumya",
    facebookLink: "",
  },
  {
    date: createDate("06/04/2026"),
    noDyos: true,
    title: "No DYOS",
    subtitle: "See you next week! Happy Pride Month :)",
  },
  {
    date: createDate("06/11/2026"),
    title: "DYOS Spirit Night",
    subtitle:
      "Join us for a Silly J&J contest during the social. For more details, check the DYOS Discord server!",
    levelOneTopic: L1_TOPICS.week1,
    dj: "DJ Preston",
    facebookLink: "",
  },
  {
    date: createDate("06/18/2026"),
    title: "Glitter and Glow Night",
    subtitle:
      "Dust off your neon, wear your best glitter makeup, don your glowsticks for Glitter and Glow Night!",
    levelOneTopic: L1_TOPICS.week2,
    dj: "DJ Joel",
    facebookLink: "",
  },
  {
    date: createDate("06/25/2026"),
    title: "Rainbow and Flag Night",
    subtitle:
      "Finish out the last DYOS of Pride Month with your rainbow, flags, and pride apparel!",
    levelOneTopic: L1_TOPICS.week3,
    facebookLink: "",
  },
  {
    date: createDate("07/02/2026"),
    title: "D-Y-jOel-S",
    subtitle:
      "Special guest instructor and All-Star Joel will be taking over classes",
    levelOneTopic: L1_TOPICS.week1,
    dj: "DJ Joel",
    facebookLink: "",
  },
  {
    date: createDate("07/09/2026"),
    title: "July Week 2",
    subtitle: "",
    levelOneTopic: L1_TOPICS.week2,
    dj: "DJ Andy",
    facebookLink: "",
  },
  {
    date: createDate("07/16/2026"),
    title: "July Week 3",
    subtitle: "",
    levelOneTopic: L1_TOPICS.week3,
    facebookLink: "",
  },
  {
    date: createDate("07/23/2026"),
    title: "July Week 4",
    subtitle: "",
    levelOneTopic: L1_TOPICS.week4,
    dj: "DJ Preston",
    facebookLink: "",
  },
  {
    date: createDate("07/30/2026"),
    title: "Guest Instructor Rosemary Whitson!",
    subtitle:
      "Join us for a special night of classes taught by All-Star competitor " +
      "and lead-follow-AND-switch dancing phenomenon, Rosemary Whitson!",
    levelOneTopic: L1_TOPICS.week4,
    dj: "DJ Saucy",
    facebookLink: "",
  },
  {
    date: createDate("08/06/2026"),
    title: "Swingtacular Week!",
    subtitle:
      "Join us for a shorter event with Alison, Joel, and Natasha! Our social dance will end at 10:30pm tonight.",
    dj: "TBA",
  },
  {
    date: createDate("08/13/2026"),
  },
  {
    date: createDate("08/20/2026"),
  },
  {
    date: createDate("08/27/2026"),
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

// Example item with all possible info:
// {
//   date: createDate("mm/dd/yyyy"),
//   title: "title",
//   subtitle: "subtitle",
//   advanceTopic: "class topic",
//   levelOneTopic: L1_TOPICS.week1,
//   dj: "DJ DJ",
//   facebookLink: "https://www.example.com/",
// },

// Intro Class Scheduling doc: https://docs.google.com/spreadsheets/d/1JN8aU4991QY5T3iG_sc1WaUgN2MB8FN1t2rTakj4WOA/edit?gid=732299169#gid=732299169
//   Specifies the class topics
// Volunteer Sign Up Sheet: https://docs.google.com/spreadsheets/d/1xShbXzthXebT5oTHvB77HGHUBHOC3EyrIx05clzhVzI/edit?gid=0#gid=0
//   Usually has DJ details

// TODO support specifying a particular month
function getThisMonthsEvents() {
  const thisMonth = getNextThursday().month();

  const thisMonthEvents = allEvents.filter(
    (event) => event.date.month() === thisMonth,
  );

  // Add default info to each event based on which week it is in the month
  const monthName = nameOfMonth(thisMonth);
  const weeksWithDyos = thisMonthEvents.filter((e) => !e.noDyos);
  return thisMonthEvents.map((event) => {
    if (event.noDyos) {
      return event;
    } else {
      const week = weeksWithDyos.findIndex((e) => e.date === event.date) + 1;

      // weeks beyond 4 repeat L4 topics
      const l1TopicWeek = week > 4 || week < 1 ? 4 : week;

      // if the event specified a title or L1 topic, those take precedence
      return {
        title: `${monthName} Week ${week}`,
        levelOneTopic: L1_TOPICS[`week${l1TopicWeek}`],
        ...event,
      };
    }
  });
}

export default getThisMonthsEvents;
