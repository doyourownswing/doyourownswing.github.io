import theme from "common/theme";

const announcementStyles = {
  invisible: { opacity: "0%" },
  container: {
    background: theme.palette.background.announcement,
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    ...theme.typography.announcement,
    fontSize: { xs: "0.875rem", sm: "1rem" },
  },
};

export default announcementStyles;
