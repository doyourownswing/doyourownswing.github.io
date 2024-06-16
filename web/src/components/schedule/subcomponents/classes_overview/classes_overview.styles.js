import theme from "common/theme";
import bubbles from "assets/images/bubbles-bw-min.jpg";

const classesOverviewStyles = {
  section: {
    // addt'l option
    // backgroundImage: { xs: `url(${bubblesVert})`, md: `url(${bubblesHoriz})` },
    backgroundImage: `url(${bubbles})`, // todo: double check readability on small screens
    backgroundPosition: "0% 15%",
    backgroundSize: { xs: "300%", sm: "200%", md: "100%" },
    backgroundColor: theme.palette.icon.lightPurple, // todo: get right tint
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
  inviteContent: {
    // todo: vertical spacing for right hand side
    paddingTop: { xs: "0px", md: "5vw" },
  },
  startHereButton: {
    marginTop: "2rem",
    borderRadius: ".75rem",
    width: "fit-content",
    padding: ".75rem 1.5rem",
    textTransform: "unset",
    backgroundColor: theme.palette.button.purpleFilled,
  },
};

export default classesOverviewStyles;
