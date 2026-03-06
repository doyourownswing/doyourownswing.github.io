import { BOX_SHADOW_2, SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";

const baseImage = {
  width: "100%",
  height: { md: "22rem" },
  borderRadius: "2rem",
  boxShadow: BOX_SHADOW_2,
  objectFit: "cover",
  objectPosition: "left",
};

const baseButton = {
  textTransform: "none",
  width: { xs: "min(20rem, 100%)", md: "100%" },
};

const upcomingEventsV2Styles = {
  container: {
    padding: SECTION_PADDING,
    background: theme.palette.background.barelyPurple,
    scrollMarginTop: { xs: "2rem" },
  },
  title: {
    ...theme.typography.title,
    textAlign: "center",
  },
  imageAndQuickViewContainer: {
    justifyContent: { md: "space-between" },
    paddingTop: "2rem",
    paddingBottom: "2rem",
    gap: "2rem",
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  imageContainer: {
    maxWidth: { xs: "100%", sm: "unset", md: "36rem" },
  },
  image: {
    ...baseImage,
  },
  image2: {
    ...baseImage,
  },
  scheduleQuickViewContainer: {
    minWidth: "min(100%, 24rem)",
  },
  locationText: {
    color: theme.palette.text.secondaryBody,
  },
  classScheduleContainer: {
    padding: "2rem 0",
  },
  classScheduleEventsContainer: {
    paddingLeft: "1rem",
    borderLeft: `2px solid ${theme.palette.border.leftAccentLightPurple}`,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  quickScheduleTitle: {
    fontWeight: "600",
    color: theme.palette.text.title,
  },
  quickScheduleHeader: {
    fontWeight: "600",
    paddingBottom: "1rem",
  },
  classScheduleLevelAndClassName: {
    display: "inline-flex",
    gap: "0.5rem",
  },
  classLevel: {
    color: theme.palette.text.title,
    fontWeight: "700",
    // If screen is small enough, make the class name shrink, not the level
    flexShrink: "0",
  },
  className: {
    fontWeight: "700",
    color: "black",
  },
  classDetailContainer: {
    display: "inline-flex",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  classDetailIcon: {
    color: theme.palette.icon.inactive,
    // Adds a bit of padding since line height is 1.5
    paddingTop: "0.25rem",
  },
  classDetail: {
    color: theme.palette.text.secondaryBody,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  classesLearnMoreButton: {
    ...baseButton,
  },
  knowBeforeYouGoButton: {
    ...baseButton,
    backgroundColor: "white",
  },
  monthEventsContainer: {
    paddingTop: "4rem",
  },
  monthScheduleTitle: {
    fontWeight: "600",
    color: theme.palette.text.title,
  },
  eventCardsContainer: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  callout: {
    backgroundColor: "white",
  },
};

export default upcomingEventsV2Styles;
