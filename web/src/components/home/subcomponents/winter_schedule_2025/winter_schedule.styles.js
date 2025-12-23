import { SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";
import { getRandomInt } from "@/utils/random";

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

const snowflakeCounts = [
  { size: 1, count: 40, duration: 100 },
  { size: 2, count: 25, duration: 80 },
  { size: 3, count: 15, duration: 60 },
  { size: 4, count: 10, duration: 40 },
  { size: 5, count: 5, duration: 20 },
];

function createBaseSnowflake(config) {
  return {
    ...baseEmbellishment,
    width: `${config.size / 2 + 0.5}rem`,
    left: `${getRandomInt(2, 98)}%`,
    animation: `falling-snowflake ${config.duration}s ease-in`,
    animationIterationCount: "infinite",
  };
}

function generateSnowflakes() {
  let snowflakes = [];

  for (var config of snowflakeCounts) {
    for (var i = 0; i < config.count; i++) {
      snowflakes.push({
        ...createBaseSnowflake(config),
        // This makes each snowflake start at a random location / time during the animation.
        animationDelay: `-${getRandomInt(1, config.duration)}s`,
      });
    }
  }

  return snowflakes;
}

const winterScheduleStyles = {
  container: {
    background: "linear-gradient(to bottom, #806898 0% 20%, #b5a2c8)",
    padding: SECTION_PADDING,
    position: "relative",
    overflow: "clip",
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
      boxShadow: "0px 0px 8px #00000088",
      transition: "0.5s",
      "&:hover": {
        boxShadow: "0px 2px 16px #000000aa",
        transform: "translateY(-2px)",
      },
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
      transition: "0.5s",
      "&:hover": {
        color: "#b5deff",
      },
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
  snowflakes: generateSnowflakes(),
};

export default winterScheduleStyles;
