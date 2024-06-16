import theme from "common/theme";
import bubbles from "assets/images/bubbles-bw-min.jpg";
import { alpha } from "@mui/material";

const classesOverviewStyles = {
  section: {
    backgroundImage: `url(${bubbles})`,
    backgroundPosition: "0% 15%",
    backgroundSize: { xs: "300%", sm: "200%", md: "100%" },
  },
  sectionLayout: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  overviewBox: {
    padding: "2vw",
    flex: 1,
  },
  inviteBox: {
    backgroundColor: alpha(theme.palette.lightPurple, 0.25),
    width: "100%",
    boxSizing: "border-box",
  },
  inviteContent: {
    paddingTop: { xs: "0px", md: "6vw" },
  },
  startHereButton: {
    marginTop: "1rem",
    borderRadius: ".75rem",
    width: "fit-content",
    padding: ".75rem 1.5rem",
    textTransform: "unset",
    backgroundColor: theme.palette.button.purpleFilled,
  },
};

export default classesOverviewStyles;
