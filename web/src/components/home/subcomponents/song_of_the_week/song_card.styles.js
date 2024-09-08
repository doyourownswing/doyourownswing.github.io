import { BOX_SHADOW } from "common/constants";
import theme from "common/theme";

const songCardStyles = {
  songCardContainer: {
    display: "flex",
    maxWidth: { xs: "320px", sm: "fit-content" },
    flexWrap: {
      xs: "wrap",
      sm: "nowrap",
    },
    borderRadius: "16px",
    boxShadow: BOX_SHADOW,
  },
  songName: {
    fontWeight: "700",
    fontSize: "24px",
  },
  songDetails: {
    color: theme.palette.text.secondaryBody,
    fontSize: "16px",
  },
  albumCoverContainer: {
    // display block adds some space at the bottom of the image
    display: "flex",
    padding: { xs: "24px", sm: "24px 12px 24px 24px" },
    margin: { xs: "auto" },
  },
  albumCoverImage: {
    width: { xs: "100%", sm: "160px" },
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
    gap: "8px 16px",
    paddingTop: "8px",
    flexWrap: { xs: "wrap", sm: "nowrap" },
  },
  linkButton: {
    textTransform: "none",
    width: { xs: "100%", sm: "136px" },
    borderColor: theme.palette.button.lightGray,
    color: "black",
    fontSize: "16px",
  },
  youtubeIcon: {
    paddingRight: "8px",
    fontSize: "32px",
    color: "#ff0000",
  },
  spotifyIcon: {
    paddingRight: "8px",
    fontSize: "32px",
    fill: "#1ed760",
  },
};

export default songCardStyles;
