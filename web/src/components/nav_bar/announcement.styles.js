import theme from "common/theme";

const announcementStyles = {
  container: {
    background: theme.palette.background.announcement,
    padding: "8px",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    ...theme.typography.announcement,
  },
};

export default announcementStyles;
