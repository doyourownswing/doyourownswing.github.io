import { BOX_SHADOW } from "@/common/constants";
import theme from "@/common/theme";

const articlePreviewStyles = {
  container: {
    backgroundColor: "white",
    cursor: "pointer",
    maxWidth: "60rem",
    padding: "2rem 3rem",
    boxShadow: BOX_SHADOW,
    borderRadius: "1rem",
    border: "1px solid lightgray",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  topItemsContainer: {
    width: "100%",
    justifyContent: "space-between",
  },
  date: {
    color: theme.palette.text.subtitle,
  },
  author: {
    color: theme.palette.text.subtitle,
  },
  previewText: {
    color: theme.palette.text.secondaryBody,
  },
};

export default articlePreviewStyles;
