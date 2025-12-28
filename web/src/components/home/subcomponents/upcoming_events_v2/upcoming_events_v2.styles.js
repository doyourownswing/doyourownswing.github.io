import { BOX_SHADOW_2, SECTION_PADDING } from "@/common/constants";
import theme from "@/common/theme";

const baseImage = {
  width: "100%",
  height: { md: "24rem" },
  borderRadius: "2rem",
  boxShadow: BOX_SHADOW_2,
  objectFit: "cover",
  objectPosition: "left",
};

const upcomingEventsV2Styles = {
  container: {
    padding: SECTION_PADDING,
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
  imageContainer: {
    maxWidth: { xs: "90vw", sm: "unset", md: "40rem" },
  },
  image: {
    ...baseImage,
  },
  image2: {
    ...baseImage,
  },
  scheduleQuickViewContainer: {
    minWidth: "min(90vw, 24rem)",
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
  },
  className: {
    fontWeight: "700",
    color: "black",
  },
  classDetailContainer: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  classDetailIcon: {
    color: theme.palette.icon.inactive,
  },
  classDetail: {
    color: theme.palette.text.secondaryBody,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  button: {
    textTransform: "none",
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
  eventCard: {
    padding: "2rem 3rem",
  },
  eventCardContentContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  eventCardContentLeftContainer: {
    display: "flex",
    gap: "2rem",
  },
};

export default upcomingEventsV2Styles;
