import theme from "common/theme";

const songCardStyles = {
  songCardContainer: {
    display: "flex",
    maxWidth: { xs: "320px", sm: "fit-content" },
    flexWrap: {
      xs: "wrap",
      sm: "wrap",
      md: "nowrap",
    },
    borderRadius: "16px",
  },
  songName: {
    fontWeight: "700",
  },
  songDetails: {
    color: theme.palette.text.secondaryBody,
  },
  albumCoverContainer: {
    // display block adds some space at the bottom of the image
    display: "flex",
    padding: { xs: "24px", sm: "24px 12px 24px 24px" },
    margin: { xs: "auto" },
  },
  albumCoverImage: {
    width: { xs: "272px", sm: "128px" },
    borderRadius: "8px",
  },
  songCardRightContent: {
    padding: { xs: "0px 24px 24px 24px", sm: "24px 24px 24px 12px" },
    display: "flex",
    flexDirection: "column",
    margin: { xs: "auto", sm: "unset" },
  },
  songInfoContainer: {
    flex: 1,
  },
  linksContainer: {
    display: "flex",
    gap: "16px",
  },
  linkButton: {
    textTransform: "none",
    width: "128px",
    borderColor: theme.palette.button.lightGray,
    color: "black",
  },
  youtubeIcon: {
    paddingRight: "8px",
    color: "#ff0000",
  },
  spotifyIcon: {
    height: "1.5em",
    width: "1.5em",
    paddingRight: "8px",
  },
  spotifyColor: "#1ed760",
};

export default songCardStyles;
