const messages = {
  subtitle: "Thursday Night Classes and Social",
  title: "Elevate Your Dancing",
  hook:
    "DYOS offers four classes of different levels, which cover topics ranging from the basics, to " +
    "exploring the creative opportunities within West Coast Swing. Join " +
    "us for one or more classes, no partner required. Not sure which " +
    "class is for you? Shoot us a message! Stay for social dancing " +
    "starting at 9:15pm!",
  maskingPolicyCallout: {
    title: "Masking Policy",
    description:
      "DYOS's health policy is aimed at mitigating the spread of Covid-19 " +
      "and reducing the severity of breakthrough infections.",
    classes:
      "X94+ Masks (KN95, N95, or KF94 with no exhaust port) are " +
      "required for classes",
    social:
      "X94+ Masks MAY be required for social dancing, depending on " +
      "prevalence of COVID-19 in Santa Clara County",
    purchase:
      "KN95 masks are available for sale at check-in - " + "$1 cash, $2 Venmo",
  },

  prerequisites: "Prerequisites",
  classes: {
    levelOne: {
      difficulty: 1,
      level: "Level 1",
      title: "West Coast Swing Foundations",
      time: "8:30pm - 9:15pm",
      location: "Sky Ballroom (second floor)",
      description:
        "For those who are brand new to West Coast Swing or developing a " +
        "basic pattern vocabulary.",
      prerequisites: "Come as you are! No partner or experience required!",
    },
    levelTwo: {
      difficulty: 2,
      level: "Level 2",
      title: "Beyond the Basics",
      time: "7:30pm - 8:00pm",
      location: "Spotlight Ballroom",
      description:
        "Learn beginner+ and intermediate patterns with a focus on repetition " +
        " and developing comfort with each pattern.",
      prerequisites:
        "For those who have attended at least one introductory level course at " +
        "DYOS or another studio/event.",
    },
    levelThree: {
      difficulty: 3,
      level: "Level 3",
      title: "Skills and Drills",
      time: "8:05pm - 8:35pm",
      location: "Spotlight Ballroom",
      description:
        "This class will introduce you to movement, connection, and rhythm " +
        "theories, skills, and methods. It will be a time to focus on skills via " +
        "drills. This class will have less music and actual dancing than the " +
        "average dance class, but will develop awareness and intention in your " +
        "approach to West Coast Swing!",
      prerequisitesPrompt: "You should know how to do the following:",
      prerequisitesList: [
        "Tuck Turn (sugar and/or passing)",
        "Spinning Side Pass (inside roll and/or free spin)",
        "Starter Step",
        "8-Count Whip",
      ],
    },

    levelFour: {
      difficulty: 4,
      level: "Level 4",
      title: "Artistic Application",
      time: "8:40pm - 9:10pm",
      location: "Spotlight Ballroom",
      description:
        "Learn the skills for improvised, partnered musical expression " +
        "with 2-3 applications of Level 3 Class material. The focus of  " +
        "this class will be responding to the music and your partner! This " +
        "class will help you cultivate those magical " +
        '"How can this dance be improvised??" moments.',
      prerequisites:
        "All of the Skills and Drills (Level 3) prerequisites, as well as " +
        "general comfort navigating social dances",
    },
  },
};

export default messages;
