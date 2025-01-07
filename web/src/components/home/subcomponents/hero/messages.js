const adjectivesList = [
  "MODERN",
  "VERSATILE",
  "INCLUSIVE",
  "EVOLVING",
  "UPBEAT",
  "JAZZY",
  "MUSICAL",
  "GROUNDED",
  "SOCIAL",
  "HISTORICAL",
  "DRAMATIC",
  "CHILL",
  "INNOVATIVE",
  "CREATIVE",
  "COMPETITIVE",
  "TECHNICAL",
  "ARTISTIC",
  "CONNECTED",
  "INTERNATIONAL",
  "MAGICAL",
  "FUN",
  "EXCITING",
  "FLEXIBLE",
  "EXPRESSIVE",
  "COLLABORATIVE",
  "CONTEMPORARY",
  "PLAYFUL",
  "SMOOTH",
  "FLUID",
  "ADAPTABLE",
  "LIVELY",
  "IMPROVISED",
  "GROOVY",
  "SLEEK",
  "LYRICAL",
  "ENGAGING",
  "FLOATY",
  "FLOWY",
];

// Shuffles the ordering of a list.
//
// The hope is every time the user refreshes the page,
// the adjectives will be in a different order.
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const messages = {
  pretitle: "At Do Your Own Swing you'll learn why",
  callToAction: "WEST COAST SWING IS",
  friendly: "A COVID-conscious, Queer-led, 2SLGBTQIA+ affirming space",
  whatWhenWhere:
    "West Coast Swing classes on Thursday nights at Studio M Ballroom in San Jose, CA",
  primaryButton: "COME DANCE WITH US",
  secondaryButton: "START HERE IF YOU'RE NEW",
  nytCallout: "Read what The New York Times has to say about West Coast Swing",
  splashImageAltText: "Birds eye view picture of a social at Do Your Own Swing",
  nytLogoAltText: "The New York Time logo",
  adjectives: shuffleArray(adjectivesList),
};

export default messages;
