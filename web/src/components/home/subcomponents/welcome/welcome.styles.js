const welcomeStyles = {
  sectionLayout: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    maxHeight: { xs: "40rem", sm: "50rem", md: "35rem" },
  },
  splashPicture: {
    objectFit: "cover",
    height: { xs: "20rem", sm: "25rem", md: "35rem" },
    width: "auto",
    aspectRatio: "3/2",
    overflow: "hidden",
  },
  titleBox: {
    padding: "8vw",
  },
  startHereButton: {
    marginTop: "2rem",
    borderRadius: ".75rem",
    width: "fit-content",
    padding: ".75rem 1.5rem",
    textTransform: "unset",
  },
};

export default welcomeStyles;
