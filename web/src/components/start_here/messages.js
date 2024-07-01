const messages = {
  firstTimeHere: "First time here?",
  welcomeToDyos: "Welcome to DYOS!",
  subtitle:
    "Here's a simple guide to help you feel prepared if it's " +
    "your first time coming to a DYOS event:",
  endSentence: ". ",
  beforeTheEvent: {
    title: "Before the event:",
    review: {
      our: "Review our",
      codeOfConduct: "Code of Conduct",
      and: "&",
      healthPolicy: "Health Policy",
    },
    registration: {
      fillOut: "Fill out our",
      registrationForm: "one-time registration form",
      doLater:
        "You can also do this when you arrive, but doing it ahead of time makes things easier.",
    },
    class: {
      choose:
        "Choose which class to go to. Classes are on Thursday evenings and span 3 " +
        "different levels. ",
      moreInfo: "Check out more information about our classes ",
      here: "here",
      classOptions: [
        {
          class: "Welcome to WCS (Level 1) - 8:45pm in the Royal Ballroom",
          description:
            "Start here if you've never danced West Coast Swing. This class is also a great " +
            "option if you want to start learning the opposite role, or just want a quick refresher.",
        },
        {
          class: "Building Blocks (Level 2) - 7:30pm in the Spotlight Ballroom",
          description:
            "If you're already familiar with the basic patterns and timing of West Coast Swing, " +
            "this is the class for you. If you're thinking about joining this class, you should be " +
            "comfortable dancing a Left Side Pass, Under Arm Pass, and Sugar Push.",
        },
        {
          class:
            "Creative Expressions (Level 3) - 8:15pm in the Spotlight Ballroom",
          description:
            "For those who are proficient with the basics and want to learn higher level patterns, techniques, and styling.",
        },
      ],
    },
  },
  whenYouArrive: {
    title: "When you arrive:",
    checkIn:
      "Check in at the DYOS station at the front desk of Studio M. They will confirm " +
      "you're registered and collect payment or confirm your sponsorship is active.",
    masks: {
      purchase:
        "If masks are required and you do not have one, a mask can be purchased from the front desk for:",
      oneDollar: "$1 cash or Zelle",
      twoDollars:
        "$2 Venmo or PayPal (pricing difference due to transaction fees)",
    },
    acquire: {
      station:
        "Just past the entrance, there's a station to optionally grab the following:",
      items: [
        {
          item: "Name tags",
          description:
            "you can write your preferred name, pronouns, and have the option of adding a " +
            "mask sticker to your nametag if you wish for others to keep a mask on when dancing with you.",
        },
        {
          item: "Color-coded wristbands",
          description: "these indicate your preferred role(s) in the dance.",
        },
        {
          item: "Pride stickers",
          description:
            "we are 2SLGBTQIA+ affirming space and welcome the opportunity to express our pride!",
        },
        {
          item: "Mints",
          description:
            "You may be dancing in close proximity to others, so be considerate of your hygiene.",
        },
      ],
    },
    proceed:
      "Proceed to your selected DYOS class/event. Please note the studio has multiple rooms and " +
      "DYOS shares this space with other non-DYOS dancers. If you are unsure where to go, " +
      "check with the front desk and they can point you in the right direction. ",
  },
  faqs: {
    title: "Newcomer FAQs",
    questions: [
      {
        question: "Do I need to bring a dance partner?",
        answer: {
          description:
            "No partner required! During class, we rotate partners " +
            "often, so you will get to dance with many different people.",
        },
      },
      {
        question: "What attire is expected?",
        answer: {
          description:
            "We don't require a specific uniform; just be clean and respectful. " +
            "Most of our dancers dress casually - a nice shirt (t-shirt or button down) and " +
            "long pants or jeans are typical. A good rule of thumb is to choose clothing and " +
            "shoes that are 1) easy to move around in and 2) make you feel comfortable and confident. " +
            "This is a safe space to express who you are. If you tend to sweat, it's ok and encouraged to " +
            "bring a change of clothes and deodorant.",
        },
      },
      {
        question: "How do I choose whether to lead or follow?",
        answer: {
          description:
            "You can choose either - it is not affiliated with gender and is up to your preference! " +
            "The leader is responsible for initiating movement, and the follower's role is to maintain " +
            "the movement. Many dancers primarily start out learning one role, and then may later choose " +
            "to learn the opposite role, so you aren't forever committed to only leading or following.",
        },
      },
      {
        question: "How does social dancing work?",
        answer: {
          description:
            "Social dancing is an informal, non-competitive time to dance and socialize with others. " +
            "Navigating the social dance floor can be intimidating, but here are a few tips:",
          details: [
            "You can select a color-coded wristband at the entrance to indicate your preference " +
              "to lead, follow, both, or observe during social dance time.",
            "You may ask and be asked to dance. Anyone can ask anyone, regardless of gender or experience. " +
              "If you are asked to dance but don't wish to dance at that time, you have the right to say no " +
              "without explanation, and should respect if others decline your request. ",
            "Be mindful of space - the dance floor can get crowded and we want everyone to stay safe " +
              "and avoid collisions with other dancers. Leaders should especially be aware of the " +
              "space and not lead their follower into anyone.",
            "Be kind and be sure to thank your partner afterward. ",
          ],
        },
      },
    ],
  },
};

export default messages;
