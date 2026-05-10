const messages = {
  firstTimeHere: "First time here?",
  welcomeToDyos: "Welcome to DYOS!",
  subtitle:
    "Here's a simple guide to help you feel prepared if it's " +
    "your first time coming to a DYOS event:",
  endSentence: ". ",
  beforeTheEvent: {
    title: "Before the event",
    review: {
      pretitle: "STEP 3",
      title: "Review our Code of Conduct",
      details:
        "At Do Your Own Swing, safety and inclusion stands at the center of everything we do. " +
        "Please help us uphold our vision by familiarizing yourself with our Code of Conduct.",
      callToAction: "Read our Code of Conduct",
    },
    registration: {
      pretitle: "STEP 1",
      title: "Fill out our one-time registration form",
      details:
        "You can also do this when you arrive, but doing it ahead of time makes things easier",
      callToAction: "Register here",
    },
    class: {
      pretitle: "STEP 2",
      title: "Find which classes are best for you",
      details:
        "We offer four different classes, each designed to challenge dancers of different " +
        "skill levels. Take a look at the classes and see which ones might be best for you. " +
        "If you're not sure, send us a message!",
      callToAction: "Read about our classes",
    },
  },
  whenYouArrive: {
    title: "When you arrive",
    checkIn: {
      pretitle: "STEP 1",
      title: "Check in",
      details:
        "Check in at the DYOS station at the front desk of Studio M. " +
        "They will confirm you're registered and collect payment or confirm " +
        "your sponsorship is active. We currently accept cash, Zelle, Venmo, " +
        "and PayPal. High filtration masks are required for class, but if you " +
        "don't have one, a mask can be purchased from the front desk for $1.",
    },
    acquire: {
      pretitle: "STEP 2",
      title: "Gear up",
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
            "we are a 2SLGBTQIA+ affirming space and welcome the opportunity to express our pride!",
        },
        {
          item: "Mints",
          description:
            "You may be dancing in close proximity to others, so be considerate of your hygiene.",
        },
      ],
    },
    proceed: {
      pretitle: "STEP 3",
      title: "Start dancing!",
      details:
        "Proceed to your selected DYOS class/event. Please note the studio has multiple rooms and " +
        "DYOS shares this space with other non-DYOS dancers. If you are unsure where to go, " +
        "check with the front desk and they can point you in the right direction. ",
    },
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
            "the movement. It's totally acceptable to start learning one role, then switch to the other. " +
            "In fact, many of our dancers learn to dance both!",
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
