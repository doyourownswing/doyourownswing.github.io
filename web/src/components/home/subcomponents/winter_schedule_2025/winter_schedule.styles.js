import { BOX_SHADOW_2, SECTION_PADDING } from "common/constants";
import theme from "common/theme";

// NOTE: Not canonicalizing this because it's a temporary thing for nowww

const baseEventCard = {
  // Currently the min and max never reach the bounds, but keeping it just in case.
  paddingLeft: "clamp(1rem, 8%, 2rem)",
  paddingRight: "clamp(1rem, 8%, 2rem)",
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  borderRadius: "1.5rem",
  justifyContent: "space-between",
  alignItems: "center",
};

const baseThursday = {
  fontFamily: "Poppins",
  fontWeight: "600",
};

const baseDate = {
  fontFamily: "Poppins",
  fontWeight: "700",
};

const baseEmbellishment = {
  opacity: "15%",
  position: "absolute",
  // Make sure it stays behind the actual content
  zIndex: "0",
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateStars(numStarsPerSide) {
  let stars = [];

  // Create stars for left side.
  for (var i = 0; i < numStarsPerSide; i++) {
    stars.push({
      ...baseEmbellishment,
      width: getRandomInt(1, 3) + "rem",
      top: getRandomInt(10, 95) + "%",
      left: getRandomInt(5, 30) + "%",
    });
  }

  // Create stars for right side.
  for (i = 0; i < numStarsPerSide; i++) {
    stars.push({
      ...baseEmbellishment,
      width: getRandomInt(1, 3) + "rem",
      top: getRandomInt(10, 95) + "%",
      left: getRandomInt(70, 95) + "%",
    });
  }

  // Create stars for middle section.
  for (i = 0; i < numStarsPerSide; i++) {
    stars.push({
      ...baseEmbellishment,
      width: getRandomInt(1, 3) + "rem",
      top: getRandomInt(40, 95) + "%",
      left: getRandomInt(30, 70) + "%",
    });
  }

  return stars;
}

const winterScheduleStyles = {
  container: {
    background: "linear-gradient(to bottom, #806898 0% 20%, #b5a2c8)",
    padding: SECTION_PADDING,
    position: "relative",
  },
  contentContainer: {
    // Make sure content is in front of the embellishments
    position: "relative",
    zIndex: 1,
  },
  title: {
    ...theme.typography.title,
    color: "white",
    textAlign: "center",
    textShadow: "0 0 8px #5d5d5d",
    // Extra padding to show off the hanging stars
    paddingTop: "2rem",
    paddingBottom: "4rem",
  },
  noClassEventCard: {
    ...baseEventCard,
  },
  eventsContainer: {
    justifyContent: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  dyosDay: {
    eventCard: {
      ...baseEventCard,
      backgroundColor: "#3c1564",
      boxShadow: BOX_SHADOW_2,
    },
    thursday: {
      ...baseThursday,
      color: "#c48cff",
    },
    date: {
      ...baseDate,
      color: "#e1e1e1",
    },
    button: {
      textTransform: "none",
      color: "#64bbff",
      fontSize: "1.25rem",
      fontWeight: "700",
    },
  },
  noDyos: {
    eventCard: {
      ...baseEventCard,
      backgroundColor: "#4f3867",
    },
    thursday: {
      ...baseThursday,
      color: "#b49bcf",
    },
    date: {
      ...baseDate,
      color: "#a3a3a3",
    },
    noDyosText: {
      color: "#a3a3a3",
      fontSize: "1.25rem",
      fontWeight: "700",
      // Mimic the padding given by buttons
      paddingRight: "8px",
    },
  },
  stars: {
    ...baseEmbellishment,
    top: "0",
    width: "min(50vw, 32rem)",
    left: "calc(50% - min(50vw, 32rem) / 2)",
  },
  snowflakes: generateStars(10),
};

export default winterScheduleStyles;
